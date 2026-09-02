import express from "express";

import {
  getAdminDashboard,
  getAllUsers,
  getUserById,
  activateUser,
  deactivateUser,
  deleteUser,
} from "../controllers/adminController.js";

import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/dashboard", adminAuth, getAdminDashboard);

router.use(adminAuth);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id/activate", activateUser);
router.put("/users/:id/deactivate", deactivateUser);
router.delete("/users/:id", deleteUser);

export default router;