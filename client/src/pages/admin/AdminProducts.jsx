import React, { useEffect, useMemo, useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiSearch,
  FiRefreshCw,
  FiCheck,
  FiX,
  FiStar,
  FiDollarSign,
  FiBox,
  FiTag,
} from "react-icons/fi";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./AdminProducts.css";

const emptyForm = {
  name: "",
  category: "",
  brand: "",
  sku: "",
  description: "",
  price: "",
  discountPrice: "",
  stock: "",
  image: "",
  featured: false,
  isActive: true,
  specifications: "",
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState(emptyForm);

  // ============================================================
  // LOAD PRODUCTS
  // ============================================================

  const loadProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/products");

      const data =
        response?.data?.products ||
        response?.products ||
        [];

      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Load products error:", error);

      toast.error(
        error?.message || "Unable to load products"
      );

      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // ============================================================
  // FORM CHANGE
  // ============================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ============================================================
  // ADD PRODUCT
  // ============================================================

  const handleAdd = () => {
    setEditingProduct(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  // ============================================================
  // EDIT PRODUCT
  // ============================================================

  const handleEdit = (product) => {
    setEditingProduct(product);

    let specifications = "";

    if (Array.isArray(product.specifications)) {
      specifications = product.specifications
        .map((item) => {
          if (
            typeof item === "object" &&
            item !== null
          ) {
            return `${item.name || ""}: ${
              item.value || ""
            }`;
          }

          return String(item);
        })
        .join("\n");
    } else if (
      typeof product.specifications === "object" &&
      product.specifications !== null
    ) {
      specifications = Object.entries(
        product.specifications
      )
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
    } else {
      specifications = product.specifications || "";
    }

    setForm({
      name: product.name || "",
      category: product.category || "",
      brand: product.brand || "",
      sku: product.sku || "",
      description: product.description || "",
      price:
        product.price !== undefined
          ? product.price
          : "",
      discountPrice:
        product.discountPrice !== undefined
          ? product.discountPrice
          : "",
      stock:
        product.stock !== undefined
          ? product.stock
          : "",
      image: product.image || "",
      featured: Boolean(product.featured),
      isActive:
        typeof product.isActive === "boolean"
          ? product.isActive
          : true,
      specifications,
    });

    setShowModal(true);
  };

  // ============================================================
  // CLOSE MODAL
  // ============================================================

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingProduct(null);
    setForm(emptyForm);
  };

  // ============================================================
  // VALIDATION
  // ============================================================

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter product name");
      return false;
    }

    if (!form.category.trim()) {
      toast.error("Please enter product category");
      return false;
    }

    if (!form.price && form.price !== 0) {
      toast.error("Please enter product price");
      return false;
    }

    const price = Number(form.price);

    if (Number.isNaN(price) || price < 0) {
      toast.error("Please enter a valid price");
      return false;
    }

    if (form.discountPrice !== "") {
      const discountPrice = Number(
        form.discountPrice
      );

      if (
        Number.isNaN(discountPrice) ||
        discountPrice < 0
      ) {
        toast.error(
          "Please enter a valid discount price"
        );
        return false;
      }

      if (discountPrice > price) {
        toast.error(
          "Discount price cannot be greater than original price"
        );
        return false;
      }
    }

    if (form.stock !== "") {
      const stock = Number(form.stock);

      if (Number.isNaN(stock) || stock < 0) {
        toast.error("Please enter a valid stock quantity");
        return false;
      }
    }

    return true;
  };

  // ============================================================
  // PARSE SPECIFICATIONS
  // ============================================================

  const parseSpecifications = () => {
    if (!form.specifications.trim()) {
      return [];
    }

    return form.specifications
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");

        if (separatorIndex === -1) {
          return {
            name: line,
            value: "",
          };
        }

        return {
          name: line
            .slice(0, separatorIndex)
            .trim(),

          value: line
            .slice(separatorIndex + 1)
            .trim(),
        };
      });
  };

  // ============================================================
  // SAVE PRODUCT
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSaving(true);

      const payload = {
        name: form.name.trim(),
        category: form.category.trim(),
        brand: form.brand.trim(),
        sku: form.sku.trim(),
        description: form.description.trim(),

        price: Number(form.price),

        discountPrice:
          form.discountPrice === ""
            ? null
            : Number(form.discountPrice),

        stock:
          form.stock === ""
            ? 0
            : Number(form.stock),

        image: form.image.trim(),

        featured: Boolean(form.featured),

        isActive: Boolean(form.isActive),

        specifications: parseSpecifications(),
      };

      if (editingProduct) {
        await api.put(
          `/products/${editingProduct._id}`,
          payload
        );

        toast.success(
          "Product updated successfully"
        );
      } else {
        await api.post("/products", payload);

        toast.success(
          "Product added successfully"
        );
      }

      closeModal();

      await loadProducts();
    } catch (error) {
      console.error("Save product error:", error);

      toast.error(
        error?.message ||
          `Unable to ${
            editingProduct
              ? "update"
              : "add"
          } product`
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // DELETE PRODUCT
  // ============================================================

  const handleDelete = async (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!confirmed) return;

    try {
      await api.delete(
        `/products/${product._id}`
      );

      toast.success(
        "Product deleted successfully"
      );

      setProducts((prev) =>
        prev.filter(
          (item) => item._id !== product._id
        )
      );
    } catch (error) {
      console.error(
        "Delete product error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to delete product"
      );
    }
  };

  // ============================================================
  // TOGGLE STATUS
  // ============================================================

  const handleToggleStatus = async (product) => {
    try {
      const payload = {
        ...product,
        isActive: !product.isActive,
      };

      delete payload._id;
      delete payload.createdAt;
      delete payload.updatedAt;
      delete payload.__v;

      await api.put(
        `/products/${product._id}`,
        payload
      );

      setProducts((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? {
                ...item,
                isActive: !item.isActive,
              }
            : item
        )
      );

      toast.success(
        product.isActive
          ? "Product deactivated"
          : "Product activated"
      );
    } catch (error) {
      console.error(
        "Toggle product status error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to update product status"
      );
    }
  };

  // ============================================================
  // TOGGLE FEATURED
  // ============================================================

  const handleToggleFeatured = async (product) => {
    try {
      const payload = {
        ...product,
        featured: !product.featured,
      };

      delete payload._id;
      delete payload.createdAt;
      delete payload.updatedAt;
      delete payload.__v;

      await api.put(
        `/products/${product._id}`,
        payload
      );

      setProducts((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? {
                ...item,
                featured: !item.featured,
              }
            : item
        )
      );

      toast.success(
        product.featured
          ? "Removed from featured products"
          : "Added to featured products"
      );
    } catch (error) {
      console.error(
        "Toggle featured error:",
        error
      );

      toast.error(
        error?.message ||
          "Unable to update featured status"
      );
    }
  };

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) =>
            product.category?.trim()
          )
          .filter(Boolean)
      ),
    ].sort();
  }, [products]);

  // ============================================================
  // FILTER PRODUCTS
  // ============================================================

  const filteredProducts = useMemo(() => {
    const query = search
      .toLowerCase()
      .trim();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name
          ?.toLowerCase()
          .includes(query) ||
        product.category
          ?.toLowerCase()
          .includes(query) ||
        product.brand
          ?.toLowerCase()
          .includes(query) ||
        product.sku
          ?.toLowerCase()
          .includes(query);

      const matchesCategory =
        categoryFilter === "all" ||
        product.category === categoryFilter;

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active"
          ? product.isActive
          : !product.isActive);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    products,
    search,
    categoryFilter,
    statusFilter,
  ]);

  // ============================================================
  // HELPERS
  // ============================================================

  const getProductPrice = (product) => {
    const price = Number(product.price || 0);

    const discount =
      product.discountPrice !== null &&
      product.discountPrice !== undefined &&
      product.discountPrice !== ""
        ? Number(product.discountPrice)
        : null;

    return {
      price,
      discount,
      hasDiscount:
        discount !== null &&
        discount < price,
    };
  };

  const getStockStatus = (stock) => {
    const quantity = Number(stock || 0);

    if (quantity <= 0) {
      return {
        text: "Out of Stock",
        className: "out",
      };
    }

    if (quantity <= 5) {
      return {
        text: `Low Stock (${quantity})`,
        className: "low",
      };
    }

    return {
      text: `${quantity} in stock`,
      className: "available",
    };
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="admin-products-page">
      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="admin-products-header">
        <div>
          <h1>Product Management</h1>

          <p>
            Manage products available in your solar
            store
          </p>
        </div>

        <button
          type="button"
          className="admin-products-add-btn"
          onClick={handleAdd}
        >
          <FiPlus />
          Add Product
        </button>
      </div>

      {/* ======================================================
          STATISTICS
      ====================================================== */}

      <div className="admin-products-stats">
        <div className="admin-products-stat-card">
          <div className="admin-products-stat-icon">
            <FiPackage />
          </div>

          <div>
            <span>Total Products</span>
            <strong>{products.length}</strong>
          </div>
        </div>

        <div className="admin-products-stat-card">
          <div className="admin-products-stat-icon">
            <FiCheck />
          </div>

          <div>
            <span>Active Products</span>
            <strong>
              {
                products.filter(
                  (product) =>
                    product.isActive
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="admin-products-stat-card">
          <div className="admin-products-stat-icon">
            <FiBox />
          </div>

          <div>
            <span>Out of Stock</span>
            <strong>
              {
                products.filter(
                  (product) =>
                    Number(product.stock || 0) <=
                    0
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="admin-products-stat-card">
          <div className="admin-products-stat-icon">
            <FiStar />
          </div>

          <div>
            <span>Featured</span>
            <strong>
              {
                products.filter(
                  (product) =>
                    product.featured
                ).length
              }
            </strong>
          </div>
        </div>
      </div>

      {/* ======================================================
          FILTERS
      ====================================================== */}

      <div className="admin-products-toolbar">
        <div className="admin-products-search">
          <FiSearch />

          <input
            type="text"
            placeholder="Search products, brand or SKU..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="admin-products-filters">
          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Categories
            </option>

            {categories.map((category) => (
              <option
                value={category}
                key={category}
              >
                {category}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Status
            </option>

            <option value="active">
              Active
            </option>

            <option value="inactive">
              Inactive
            </option>
          </select>

          <button
            type="button"
            className="admin-products-refresh"
            onClick={loadProducts}
            disabled={loading}
          >
            <FiRefreshCw
              className={
                loading
                  ? "admin-products-spin"
                  : ""
              }
            />
            Refresh
          </button>
        </div>
      </div>

      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      {loading ? (
        <div className="admin-products-loading">
          <div className="admin-products-loader"></div>

          <p>
            Loading products...
          </p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="admin-products-empty">
          <FiPackage />

          <h3>
            {search ||
            categoryFilter !== "all" ||
            statusFilter !== "all"
              ? "No products found"
              : "No products yet"}
          </h3>

          <p>
            {search ||
            categoryFilter !== "all" ||
            statusFilter !== "all"
              ? "Try changing your filters."
              : "Add your first product to start selling."}
          </p>

          {!search &&
            categoryFilter === "all" &&
            statusFilter === "all" && (
              <button
                type="button"
                className="admin-products-add-btn"
                onClick={handleAdd}
              >
                <FiPlus />
                Add Product
              </button>
            )}
        </div>
      ) : (
        <div className="admin-products-grid">
          {filteredProducts.map(
            (product) => {
              const pricing =
                getProductPrice(product);

              const stockStatus =
                getStockStatus(
                  product.stock
                );

              return (
                <div
                  className={`admin-product-card ${
                    !product.isActive
                      ? "admin-product-card-inactive"
                      : ""
                  }`}
                  key={product._id}
                >
                  {/* IMAGE */}

                  <div className="admin-product-image">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";

                          const fallback =
                            e.currentTarget
                              .nextSibling;

                          if (fallback) {
                            fallback.style.display =
                              "flex";
                          }
                        }}
                      />
                    ) : null}

                    <div
                      className="admin-product-image-fallback"
                      style={{
                        display:
                          product.image
                            ? "none"
                            : "flex",
                      }}
                    >
                      <FiPackage />
                    </div>

                    <div className="admin-product-badges">
                      {!product.isActive && (
                        <span className="inactive">
                          Inactive
                        </span>
                      )}

                      {product.featured && (
                        <span className="featured">
                          <FiStar />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* BODY */}

                  <div className="admin-product-body">
                    <div className="admin-product-category">
                      <FiTag />

                      {product.category}
                    </div>

                    <h3>
                      {product.name}
                    </h3>

                    {product.brand && (
                      <p className="admin-product-brand">
                        {product.brand}
                      </p>
                    )}

                    {product.description && (
                      <p className="admin-product-description">
                        {
                          product.description
                        }
                      </p>
                    )}

                    {/* PRICE */}

                    <div className="admin-product-price">
                      {pricing.hasDiscount ? (
                        <>
                          <strong>
                            ₹
                            {pricing.discount.toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                          <span>
                            ₹
                            {pricing.price.toLocaleString(
                              "en-IN"
                            )}
                          </span>
                        </>
                      ) : (
                        <strong>
                          ₹
                          {pricing.price.toLocaleString(
                            "en-IN"
                          )}
                        </strong>
                      )}
                    </div>

                    {/* STOCK */}

                    <div className="admin-product-stock-row">
                      <span
                        className={`admin-product-stock ${stockStatus.className}`}
                      >
                        {stockStatus.text}
                      </span>

                      {product.sku && (
                        <span className="admin-product-sku">
                          SKU: {product.sku}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div className="admin-product-actions">
                    <button
                      type="button"
                      className="admin-product-edit-btn"
                      onClick={() =>
                        handleEdit(
                          product
                        )
                      }
                    >
                      <FiEdit2 />
                      Edit
                    </button>

                    <button
                      type="button"
                      className={`admin-product-status-btn ${
                        product.isActive
                          ? "deactivate"
                          : "activate"
                      }`}
                      onClick={() =>
                        handleToggleStatus(
                          product
                        )
                      }
                    >
                      {product.isActive
                        ? "Deactivate"
                        : "Activate"}
                    </button>

                    <button
                      type="button"
                      className={`admin-product-feature-btn ${
                        product.featured
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleToggleFeatured(
                          product
                        )
                      }
                      title={
                        product.featured
                          ? "Remove featured"
                          : "Make featured"
                      }
                    >
                      <FiStar />
                    </button>

                    <button
                      type="button"
                      className="admin-product-delete-btn"
                      onClick={() =>
                        handleDelete(
                          product
                        )
                      }
                      title="Delete product"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}

      {/* ======================================================
          ADD / EDIT MODAL
      ====================================================== */}

      {showModal && (
        <div
          className="admin-products-modal-overlay"
          onMouseDown={(e) => {
            if (
              e.target ===
                e.currentTarget &&
              !saving
            ) {
              closeModal();
            }
          }}
        >
          <div className="admin-products-modal">
            {/* HEADER */}

            <div className="admin-products-modal-header">
              <div>
                <h2>
                  {editingProduct
                    ? "Edit Product"
                    : "Add Product"}
                </h2>

                <p>
                  {editingProduct
                    ? "Update product information"
                    : "Add a new product to your store"}
                </p>
              </div>

              <button
                type="button"
                className="admin-products-modal-close"
                onClick={closeModal}
                disabled={saving}
              >
                <FiX />
              </button>
            </div>

            {/* FORM */}

            <form
              className="admin-products-form"
              onSubmit={handleSubmit}
            >
              {/* BASIC INFORMATION */}

              <div className="admin-products-section">
                <h3>
                  Product Information
                </h3>

                <div className="admin-products-form-grid">
                  <div className="admin-products-field">
                    <label>
                      Product Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={
                        handleChange
                      }
                      placeholder="e.g. 5kW Solar Panel"
                      required
                    />
                  </div>

                  <div className="admin-products-field">
                    <label>
                      Category *
                    </label>

                    <input
                      type="text"
                      name="category"
                      value={
                        form.category
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="e.g. Solar Panels"
                      required
                    />
                  </div>

                  <div className="admin-products-field">
                    <label>
                      Brand
                    </label>

                    <input
                      type="text"
                      name="brand"
                      value={form.brand}
                      onChange={
                        handleChange
                      }
                      placeholder="e.g. Tata Power"
                    />
                  </div>

                  <div className="admin-products-field">
                    <label>
                      SKU
                    </label>

                    <input
                      type="text"
                      name="sku"
                      value={form.sku}
                      onChange={
                        handleChange
                      }
                      placeholder="e.g. SP-5000-001"
                    />
                  </div>
                </div>

                <div className="admin-products-field">
                  <label>
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={
                      form.description
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Describe the product..."
                    rows="4"
                  />
                </div>
              </div>

              {/* PRICING */}

              <div className="admin-products-section">
                <h3>Pricing & Stock</h3>

                <div className="admin-products-form-grid">
                  <div className="admin-products-field">
                    <label>
                      Price *
                    </label>

                    <div className="admin-products-input-icon">
                      <FiDollarSign />

                      <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={
                          handleChange
                        }
                        placeholder="0"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-products-field">
                    <label>
                      Discount Price
                    </label>

                    <div className="admin-products-input-icon">
                      <FiDollarSign />

                      <input
                        type="number"
                        name="discountPrice"
                        value={
                          form.discountPrice
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Optional"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>

                  <div className="admin-products-field">
                    <label>
                      Stock Quantity
                    </label>

                    <div className="admin-products-input-icon">
                      <FiBox />

                      <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={
                          handleChange
                        }
                        placeholder="0"
                        min="0"
                        step="1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE */}

              <div className="admin-products-section">
                <h3>
                  Product Image
                </h3>

                <div className="admin-products-field">
                  <label>
                    Image URL
                  </label>

                  <input
                    type="url"
                    name="image"
                    value={form.image}
                    onChange={
                      handleChange
                    }
                    placeholder="https://example.com/product.jpg"
                  />

                  {form.image && (
                    <div className="admin-products-image-preview">
                      <img
                        src={form.image}
                        alt="Product preview"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* SPECIFICATIONS */}

              <div className="admin-products-section">
                <h3>
                  Specifications
                </h3>

                <div className="admin-products-field">
                  <label>
                    Product Specifications
                  </label>

                  <textarea
                    name="specifications"
                    value={
                      form.specifications
                    }
                    onChange={
                      handleChange
                    }
                    placeholder={
                      "Power: 5kW\nEfficiency: 21%\nWarranty: 25 Years"
                    }
                    rows="6"
                  />

                  <small>
                    Add one specification per
                    line using:
                    <br />
                    <strong>
                      Name: Value
                    </strong>
                  </small>
                </div>
              </div>

              {/* OPTIONS */}

              <div className="admin-products-options">
                <label className="admin-products-check">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={
                      form.featured
                    }
                    onChange={
                      handleChange
                    }
                  />

                  <span>
                    <FiStar />
                    Featured Product
                  </span>
                </label>

                <label className="admin-products-check">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={
                      form.isActive
                    }
                    onChange={
                      handleChange
                    }
                  />

                  <span>
                    <FiCheck />
                    Active Product
                  </span>
                </label>
              </div>

              {/* ACTIONS */}

              <div className="admin-products-modal-actions">
                <button
                  type="button"
                  className="admin-products-cancel-btn"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-products-save-btn"
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span className="admin-products-btn-loader"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FiCheck />

                      {editingProduct
                        ? "Update Product"
                        : "Add Product"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;