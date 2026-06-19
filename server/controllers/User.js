
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import User from "../models/User.js";


dotenv.config();

const JWT_SECRET = "avs_solar_secret_key_123";


// REGISTER USER
export const registerUser = async (req, res) => {
try {
  const verificationToken =
  crypto.randomBytes(32).toString("hex");

const { fullName, email, password } = req.body;

const userExists = await User.findOne({ email });

if (userExists) {
  return res.status(400).json({
    message: "Email is already registered",
  });
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = new User({
  fullName,
  email,
  password: hashedPassword,
  verificationToken,
  isVerified: false,
});

await newUser.save();

const verifyUrl =
  `http://localhost:5000/api/user/verify-email/${verificationToken}`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

try {
 console.log("Register Email:", email);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
console.log("Verify URL:", verifyUrl);

await transporter.verify();
console.log("SMTP Connected Successfully");

  await transporter.sendMail(
    {
    
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email - AVS Solar Consultancy",
    html: `
      <h2>AVS Solar Consultancy</h2>
      <p>Thank you for registering.</p>
      <p>Click the button below to verify your email:</p>

      <a href="${verifyUrl}"
         style="
           background:#0b57d0;
           color:white;
           padding:12px 20px;
           text-decoration:none;
           border-radius:5px;
           display:inline-block;
         ">
         Verify Email
      </a>
      <p>Or copy this link: <a href="${verifyUrl}">${verifyUrl}</a></p>
      <p>This link expires in 24 hours.</p>
    `,
  });
  
  console.log("Verification email sent to:", email);

  return res.status(201).json({
    message: "Registration successful. Please check your email and verify your account.",
  });
} catch (emailError) {
  console.error("EMAIL ERROR:", emailError);

  return res.status(500).json({
    message: "Email sending failed",
    error: emailError.message,
  });
}


} catch (error) {
return res.status(500).json({
message: "Server error during registration",
});
}
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      verificationToken: token,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired verification token",
      });
    }

    user.isVerified = true;
    user.verificationToken = null;

    await user.save();

    res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// LOGIN USER
export const loginUser = async (req, res) => {
try {
const { email, password } = req.body;


const user = await User.findOne({ email });

if (!user) {
  return res.status(400).json({
    message: "Invalid email or password",
  });
}

if (!user.isVerified) {
  return res.status(401).json({
    message: "Please verify your email first",
  });
}

const isMatch = await bcrypt.compare(
  password,
  user.password
);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid email or password",
  });
}

const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

return res.status(200).json({
  token,
  message: "Login successful",
});


} catch (error) {
return res.status(500).json({
message: "Server error during login",
});
}
};

// Logout user by clearing the JWT cookie
export async function logoutUser(req, res) {
    res.clearCookie("token")
    res.status(200).json({
        message: "Logout successful",
        success: true,
    })
}

// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
try {
const { email } = req.body;


const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({
    message: "User not found",
  });
}

const resetToken = crypto
  .randomBytes(32)
  .toString("hex");

user.resetPasswordToken = resetToken;
user.resetPasswordExpire =
  Date.now() + 10 * 60 * 1000;

await user.save();

const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

try {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Password Reset Request - AVS Solar Consultancy",
    html: `
      <h2>AVS Solar Consultancy</h2>
      <p>You requested a password reset.</p>
      <p>Click the button below to reset your password:</p>

      <a href="${resetUrl}"
         style="
           background:#0b57d0;
           color:white;
           padding:12px 20px;
           text-decoration:none;
           border-radius:5px;
           display:inline-block;
         ">
         Reset Password
      </a>

      <p>Or copy this link: <a href="${resetUrl}">${resetUrl}</a></p>
      <p>This link will expire in 10 minutes.</p>
    `,
  });

  console.log("Password reset email sent to:", user.email);

  return res.status(200).json({
    message: "Password reset link sent to your email",
  });
} catch (emailError) {
  console.error("Failed to send reset password email:", emailError.message);
  return res.status(500).json({
    message: "Failed to send password reset email. Please try again.",
    error: emailError.message,
  });
}
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({
      message: "Server error during password reset process",
    });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
try {
const { token } = req.params;
const { password } = req.body;

const user = await User.findOne({
  resetPasswordToken: token,
  resetPasswordExpire: {
    $gt: Date.now(),
  },
});

if (!user) {
  return res.status(400).json({
    message: "Invalid or expired token",
  });
}

const hashedPassword = await bcrypt.hash(
  password,
  10
);

user.password = hashedPassword;
user.resetPasswordToken = null;
user.resetPasswordExpire = null;

await user.save();

return res.status(200).json({
  message: "Password updated successfully",
});

} catch (error) {
return res.status(500).json({
message: error.message,
});
}
};
