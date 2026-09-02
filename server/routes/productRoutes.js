import express from "express";

import {
  getAllProducts,
  getPublicProducts,
  getPublicProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| PUBLIC
|--------------------------------------------------------------------------
*/

router.get("/public", getPublicProducts);
router.get("/public/:id", getPublicProduct);

/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
*/

router.get("/", adminAuth, getAllProducts);

router.get("/:id", adminAuth, getProduct);

router.post("/", adminAuth, createProduct);

router.put("/:id", adminAuth, updateProduct);

router.delete("/:id", adminAuth, deleteProduct);

export default router;