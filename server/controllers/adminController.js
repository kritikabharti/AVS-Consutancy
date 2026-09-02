import User from "../models/User.js";

export const getAdminDashboard = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password -verificationToken -resetPasswordToken")
      .sort({ createdAt: -1 });

    const totalUsers = users.length;
    const activeUsers = users.filter((user) => user.isActive).length;
    const recentUsers = users.slice(0, 5).map((user) => ({
      id: user._id,
      _id: user._id,
      name: user.fullName,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
    }));

    res.status(200).json({
      success: true,
      users: totalUsers,
      totalUsers,
      activeUsers,
      activeUserCount: activeUsers,
      orders: 0,
      totalOrders: 0,
      pendingOrders: 0,
      pending: 0,
      completedOrders: 0,
      completed: 0,
      revenue: 0,
      totalRevenue: 0,
      products: 0,
      totalProducts: 0,
      teamMembers: 0,
      totalTeamMembers: 0,
      recentOrders: [],
      recentUsers,
      sales: [],
    });
  } catch (error) {
    console.error("Admin dashboard error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load admin dashboard",
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password -verificationToken -resetPasswordToken")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error("Get users error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

// GET SINGLE USER
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password -verificationToken -resetPasswordToken");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
};

// ACTIVATE USER
export const activateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isActive = true;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User activated successfully",
      user,
    });
  } catch (error) {
    console.error("Activate user error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to activate user",
    });
  }
};

// DEACTIVATE USER
export const deactivateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot deactivate your own admin account",
      });
    }

    user.isActive = false;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User deactivated successfully",
      user,
    });
  } catch (error) {
    console.error("Deactivate user error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to deactivate user",
    });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own admin account",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete user error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};