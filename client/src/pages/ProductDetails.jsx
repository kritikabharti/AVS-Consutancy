import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import {
  FiArrowLeft,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiStar,
  FiTag,
} from "react-icons/fi";
import "./ProductDetails.css";

const placeholderImage =
  "https://via.placeholder.com/900x700?text=Solar+Product";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/products/public/${id}`);

        const productData =
          response.data?.product ||
          response.data?.data ||
          response.data;

        setProduct(productData);
      } catch (requestError) {
        console.error("Product details error:", requestError);

        setError(
          requestError.response?.data?.message ||
            "This product could not be loaded."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="product-details-page">
          <div className="product-loading">
            <div className="loading-spinner"></div>
            <h2>Loading product...</h2>
            <p>Please wait while we load the product details.</p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error || !product) {
    return (
      <>
        <Navbar />

        <main className="product-details-page">
          <div className="product-error">
            <div className="error-icon">!</div>

            <h2>{error || "Product not found"}</h2>

            <p>
              The product you are looking for may have been removed or is
              currently unavailable.
            </p>

            <Link to="/store" className="error-store-button">
              <FiArrowLeft />
              Back to Store
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* =========================
     PRODUCT DATA
  ========================= */

  const image =
    product.image ||
    product.imageUrl ||
    product.photo ||
    placeholderImage;

  const originalPrice = Number(product.price || 0);
  const salePrice =
    product.discountPrice !== null &&
    product.discountPrice !== undefined &&
    product.discountPrice !== ""
      ? Number(product.discountPrice)
      : null;

  const hasDiscount =
    salePrice !== null &&
    salePrice >= 0 &&
    salePrice < originalPrice;

  const displayPrice = hasDiscount ? salePrice : originalPrice;

  const savings = hasDiscount
    ? originalPrice - salePrice
    : 0;

  const discountPercentage = hasDiscount
    ? Math.round((savings / originalPrice) * 100)
    : 0;

  const formattedDisplayPrice = displayPrice.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  const formattedOriginalPrice = originalPrice.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  const stock = Number(product.stock || 0);

  return (
    <>
      <Navbar />

      <main className="product-details-page">

        {/* =====================================================
            BACK TO STORE
        ===================================================== */}

        <div className="product-back-container">
          <Link to="/store" className="product-back-button">
            <FiArrowLeft size={20} />
            <span>Back to Store</span>
          </Link>
        </div>

        {/* =====================================================
            PRODUCT
        ===================================================== */}

        <section className="product-details-card">

          {/* IMAGE */}
          <div className="product-image-section">

            {hasDiscount && (
              <div className="discount-badge">
                {discountPercentage}% OFF
              </div>
            )}

            {product.featured && (
              <div className="featured-badge">
                <FiStar size={14} />
                Featured
              </div>
            )}

            <img
              src={image}
              alt={product.name || "Solar Product"}
              className="product-main-image"
              onError={(event) => {
                event.currentTarget.src = placeholderImage;
              }}
            />
          </div>

          {/* DETAILS */}
          <div className="product-information">

            {/* CATEGORY */}
            {product.category && (
              <div className="product-category">
                <FiTag size={15} />
                {product.category}
              </div>
            )}

            {/* NAME */}
            <h1 className="product-title">
              {product.name}
            </h1>

            {/* BRAND */}
            {product.brand && (
              <div className="product-brand">
                <strong>Brand:</strong> {product.brand}
              </div>
            )}

            {/* SKU */}
            {product.sku && (
              <div className="product-sku">
                SKU: {product.sku}
              </div>
            )}

            {/* DESCRIPTION */}
            {product.description && (
              <div className="product-description">
                {product.description}
              </div>
            )}

            <div className="product-divider"></div>

            {/* PRICE */}
            <div className="product-price-row">

              <span className="product-current-price">
                ₹{formattedDisplayPrice}
              </span>

              {hasDiscount && (
                <>
                  <span className="product-original-price">
                    ₹{formattedOriginalPrice}
                  </span>

                  <span className="product-saving">
                    Save {discountPercentage}%
                  </span>
                </>
              )}

            </div>

            {/* STOCK */}
            <div
              className={
                stock > 0
                  ? "product-stock available"
                  : "product-stock unavailable"
              }
            >
              <FiCheckCircle size={20} />

              {stock > 0
                ? `${stock} available`
                : "Currently out of stock"}
            </div>

            {/* SPECIFICATIONS */}
            {Array.isArray(product.specifications) &&
              product.specifications.length > 0 && (
                <div className="product-specifications">

                  <h2>Specifications</h2>

                  <div className="specification-list">

                    {product.specifications.map(
                      (specification, index) => {

                        if (
                          typeof specification === "object" &&
                          specification !== null
                        ) {
                          return (
                            <div
                              className="specification-row"
                              key={`${specification.name || "spec"}-${index}`}
                            >
                              <span className="specification-name">
                                {specification.name ||
                                  "Specification"}
                              </span>

                              <span className="specification-value">
                                {specification.value || "-"}
                              </span>
                            </div>
                          );
                        }

                        return (
                          <div
                            className="specification-row"
                            key={`spec-${index}`}
                          >
                            <span className="specification-name">
                              {specification}
                            </span>

                            <span className="specification-value">
                              -
                            </span>
                          </div>
                        );
                      }
                    )}

                  </div>
                </div>
              )}

            {/* CONTACT BUTTONS */}
            <div className="product-actions">

              <a
                href="tel:+919988210808"
                className="product-contact-button"
              >
                <FiPhone size={19} />
                Contact Us
              </a>

              <a
                href="mailto:avsconsultancy007@gmail.com"
                className="product-enquiry-button"
              >
                <FiMail size={19} />
                Send Enquiry
              </a>

            </div>

          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="product-bottom-cta">

          <div>
            <h2>
              Need help choosing the right solar product?
            </h2>

            <p>
              Our solar experts can help you choose the right
              product according to your requirements.
            </p>
          </div>

          <div className="cta-contact">

            <a href="tel:+919988210808">
              <FiPhone />
              +91 99882 10808
            </a>

            <a href="mailto:avsconsultancy007@gmail.com">
              <FiMail />
              avsconsultancy007@gmail.com
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;