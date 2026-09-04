import express from "express";

import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
  getContactStats,
} from "../controllers/contactController.js";

import { protect } from "../middleware/adminAuth.js";

const router = express.Router();

/*
=========================================================
PUBLIC
=========================================================
*/

router.post("/", createContact);


/*
=========================================================
ADMIN
=========================================================
*/

router.get(
  "/stats",
  protect,
  getContactStats
);

router.get(
  "/",
  protect,
  getContacts
);

router.get(
  "/:id",
  protect,
  getContactById
);

router.patch(
  "/:id",
  protect,
  updateContact
);

router.delete(
  "/:id",
  protect,
  deleteContact
);

export default router;