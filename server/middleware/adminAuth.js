import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const JWT_SECRET =
  process.env.JWT_SECRET ||
  process.env.LEGACY_JWT_SECRET ||
  "hfgbdgteyhgdfsavdfertfhngjuythfjndjdkdmedkdoeoemnhgfytrgegdgsh";

const JWT_SECRETS = [
  process.env.JWT_SECRET,
  process.env.LEGACY_JWT_SECRET,
  "hfgbdgteyhgdfsavdfertfhngjuythfjndjdkdmedkdoeoemnhgfytrgegdgsh",
  "avs_solar_secret_key_123",
].filter(Boolean);

const verifyToken = (token) => {
  let lastError = null;

  for (const secret of JWT_SECRETS) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
};

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id).select(
      "-password -verificationToken -resetPasswordToken"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token",
    });
  }
};

export const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }

  next();
};

export const adminAuth = (req, res, next) => {
  protect(req, res, () => {
    adminOnly(req, res, next);
  });
};