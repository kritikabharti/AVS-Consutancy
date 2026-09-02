import Product from "../models/Product.js";

/* =========================================================
   GET ALL PRODUCTS - ADMIN
   ========================================================= */

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load products",
    });
  }
};

/* =========================================================
   GET PUBLIC PRODUCTS
   ========================================================= */

export const getPublicProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isActive: true,
    })
      .sort({
        featured: -1,
        createdAt: -1,
      })
      .lean();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get public products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load products",
    });
  }
};

export const getPublicProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isActive: true,
    }).lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get public product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load product",
    });
  }
};

/* =========================================================
   GET SINGLE PRODUCT
   ========================================================= */

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load product",
    });
  }
};

/* =========================================================
   CREATE PRODUCT
   ========================================================= */

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      brand,
      sku,
      description,
      price,
      discountPrice,
      stock,
      image,
      featured,
      isActive,
      specifications,
    } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    if (!category?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product category is required",
      });
    }

    if (
      price === undefined ||
      price === null ||
      price === "" ||
      Number.isNaN(Number(price))
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid product price is required",
      });
    }

    const numericPrice = Number(price);
    const numericDiscount =
      discountPrice === null ||
      discountPrice === undefined ||
      discountPrice === ""
        ? null
        : Number(discountPrice);

    const numericStock =
      stock === null ||
      stock === undefined ||
      stock === ""
        ? 0
        : Number(stock);

    if (numericPrice < 0) {
      return res.status(400).json({
        success: false,
        message: "Price cannot be negative",
      });
    }

    if (
      numericDiscount !== null &&
      (Number.isNaN(numericDiscount) || numericDiscount < 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid discount price",
      });
    }

    if (
      numericDiscount !== null &&
      numericDiscount > numericPrice
    ) {
      return res.status(400).json({
        success: false,
        message: "Discount price cannot be greater than original price",
      });
    }

    if (Number.isNaN(numericStock) || numericStock < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid stock quantity",
      });
    }

    const product = await Product.create({
      name: name.trim(),
      category: category.trim(),
      brand: brand?.trim() || "",
      sku: sku?.trim() || "",
      description: description?.trim() || "",
      price: numericPrice,
      discountPrice: numericDiscount,
      stock: numericStock,
      image: image?.trim() || "",
      featured: Boolean(featured),
      isActive:
        typeof isActive === "boolean" ? isActive : true,
      specifications: Array.isArray(specifications)
        ? specifications
        : [],
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

/* =========================================================
   UPDATE PRODUCT
   ========================================================= */

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const allowedFields = [
      "name",
      "category",
      "brand",
      "sku",
      "description",
      "price",
      "discountPrice",
      "stock",
      "image",
      "featured",
      "isActive",
      "specifications",
    ];

    allowedFields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(req.body, field)) {
        product[field] = req.body[field];
      }
    });

    if (product.name) {
      product.name = product.name.trim();
    }

    if (product.category) {
      product.category = product.category.trim();
    }

    if (product.brand) {
      product.brand = product.brand.trim();
    }

    if (product.sku) {
      product.sku = product.sku.trim();
    }

    if (product.description) {
      product.description = product.description.trim();
    }

    if (product.image) {
      product.image = product.image.trim();
    }

    if (product.price < 0) {
      return res.status(400).json({
        success: false,
        message: "Price cannot be negative",
      });
    }

    if (
      product.discountPrice !== null &&
      product.discountPrice !== undefined &&
      product.discountPrice !== "" &&
      product.discountPrice > product.price
    ) {
      return res.status(400).json({
        success: false,
        message: "Discount price cannot be greater than original price",
      });
    }

    if (product.stock < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock cannot be negative",
      });
    }

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

/* =========================================================
   DELETE PRODUCT
   ========================================================= */

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};