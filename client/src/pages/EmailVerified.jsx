import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiCheckCircle, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import "./EmailVerified.css";

export default function EmailVerified() {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");
  const message = searchParams.get("message");

  const isSuccess = status === "success";
  const isAlready = status === "already";

  useEffect(() => {
    document.title = isSuccess
      ? "Email Verified - AVS Solar"
      : "Email Verification - AVS Solar";
  }, [isSuccess]);

  return (
    <div className="verification-page">
      <div className="verification-card">

        {/* ICON */}
        <div
          className={`verification-icon ${
            isSuccess || isAlready ? "success" : "error"
          }`}
        >
          {isSuccess || isAlready ? (
            <FiCheckCircle />
          ) : (
            <FiAlertCircle />
          )}
        </div>

        {/* TITLE */}
        <h1>
          {isSuccess
            ? "Email Verified!"
            : isAlready
            ? "Already Verified"
            : "Verification Failed"}
        </h1>

        {/* DESCRIPTION */}
        <p className="verification-message">
          {isSuccess
            ? "Your email address has been successfully verified."
            : isAlready
            ? "Your email address has already been verified. You can log in to your account."
            : message ||
              "This verification link is invalid or has expired."}
        </p>

        {/* SUCCESS CONTENT */}
        {(isSuccess || isAlready) && (
          <div className="success-box">
            <FiCheckCircle />
            <div>
              <strong>Account Activated</strong>
              <span>
                Your AVS Solar account is now ready to use.
              </span>
            </div>
          </div>
        )}

        {/* BUTTON */}
        <Link to="/login" className="login-button">
          Continue to Login
          <FiArrowRight />
        </Link>

        {/* BRAND */}
        <div className="brand-footer">
          <span>AVS</span> SOLAR
        </div>

      </div>
    </div>
  );
}