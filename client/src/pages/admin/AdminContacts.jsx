import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FiSearch,
  FiRefreshCw,
  FiMail,
  FiPhone,
  FiUser,
  FiCalendar,
  FiMessageSquare,
  FiEye,
  FiTrash2,
  FiX,
  FiCheck,
  FiClock,
  FiSend,
  FiChevronLeft,
  FiChevronRight,
  FiAlertCircle,
} from "react-icons/fi";

import api from "../../services/api";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    closed: 0,
  });

  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [editStatus, setEditStatus] = useState("");
  const [adminNote, setAdminNote] = useState("");

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* =========================================================
     HELPERS
  ========================================================= */

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const showSuccess = (message) => {
    setSuccess(message);

    setTimeout(() => {
      setSuccess("");
    }, 3500);
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      return "—";
    }

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date) => {
    if (!date) return "—";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      return "—";
    }

    return parsed.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getContactId = (contact) => {
    return contact?._id || contact?.id;
  };

  const getStatusLabel = (value) => {
    switch (value) {
      case "new":
        return "New";

      case "read":
        return "Read";

      case "replied":
        return "Replied";

      case "closed":
        return "Closed";

      default:
        return "Unknown";
    }
  };

  /* =========================================================
     LOAD CONTACTS
  ========================================================= */

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const params = {
        page,
        limit,
      };

      if (search.trim()) {
        params.search = search.trim();
      }

      if (status !== "all") {
        params.status = status;
      }

      const response = await api.get("/contact", {
        params,
      });

      const data = response?.data || {};

      const contactList =
        data.contacts ||
        data.data ||
        data.results ||
        [];

      setContacts(Array.isArray(contactList) ? contactList : []);

      const paginationData =
        data.pagination ||
        data.meta ||
        {};

      setPagination({
        page:
          Number(
            paginationData.page ??
              data.page ??
              page
          ) || page,

        pages:
          Number(
            paginationData.pages ??
              paginationData.totalPages ??
              data.pages ??
              1
          ) || 1,

        total:
          Number(
            paginationData.total ??
              data.total ??
              contactList.length
          ) || 0,
      });
    } catch (err) {
      console.error("Load contacts error:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load contact enquiries."
      );

      setContacts([]);
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, status]);

  /* =========================================================
     LOAD STATS
  ========================================================= */

  const loadStats = useCallback(async () => {
    try {
      setStatsLoading(true);

      const response = await api.get("/contact/stats");

      const data = response?.data || {};

      const statsData =
        data.stats ||
        data.data ||
        data;

      setStats({
        total:
          Number(
            statsData.total ??
              statsData.totalContacts ??
              0
          ) || 0,

        new:
          Number(
            statsData.new ??
              statsData.newContacts ??
              0
          ) || 0,

        read:
          Number(
            statsData.read ??
              statsData.readContacts ??
              0
          ) || 0,

        replied:
          Number(
            statsData.replied ??
              statsData.repliedContacts ??
              0
          ) || 0,

        closed:
          Number(
            statsData.closed ??
              statsData.closedContacts ??
              0
          ) || 0,
      });
    } catch (err) {
      console.error("Load contact stats error:", err);

      // Do not block the complete page if statistics endpoint fails.
    } finally {
      setStatsLoading(false);
    }
  }, []);

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  /* =========================================================
     SEARCH
  ========================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
    }, 450);

    return () => clearTimeout(timer);
  }, [search]);

  /* =========================================================
     REFRESH
  ========================================================= */

  const handleRefresh = async () => {
    clearMessages();

    await Promise.all([
      loadContacts(),
      loadStats(),
    ]);

    showSuccess("Enquiries refreshed successfully.");
  };

  /* =========================================================
     OPEN DETAILS
  ========================================================= */

  const openDetails = async (contact) => {
    clearMessages();

    const id = getContactId(contact);

    if (!id) {
      setError("Unable to open this enquiry.");
      return;
    }

    try {
      const response = await api.get(
        `/contact/${id}`
      );

      const data = response?.data || {};

      const fullContact =
        data.contact ||
        data.data ||
        data;

      setSelectedContact(fullContact);

      setEditStatus(
        fullContact?.status || "new"
      );

      setAdminNote(
        fullContact?.adminNote || ""
      );

      setShowDetails(true);

      // Automatically mark new enquiry as read.
      if (fullContact?.status === "new") {
        try {
          await api.patch(`/contact/${id}`, {
            status: "read",
          });

          setSelectedContact((prev) =>
            prev
              ? {
                  ...prev,
                  status: "read",
                }
              : prev
          );

          setEditStatus("read");

          await loadStats();
          await loadContacts();
        } catch (markError) {
          console.error(
            "Mark as read error:",
            markError
          );
        }
      }
    } catch (err) {
      console.error(
        "Open contact error:",
        err
      );

      // If detail endpoint fails, use already-loaded data.
      setSelectedContact(contact);

      setEditStatus(
        contact?.status || "new"
      );

      setAdminNote(
        contact?.adminNote || ""
      );

      setShowDetails(true);
    }
  };

  /* =========================================================
     CLOSE DETAILS
  ========================================================= */

  const closeDetails = () => {
    if (saving || deleting) return;

    setShowDetails(false);
    setSelectedContact(null);
    setEditStatus("");
    setAdminNote("");
  };

  /* =========================================================
     UPDATE CONTACT
  ========================================================= */

  const handleUpdate = async () => {
    if (!selectedContact) return;

    const id = getContactId(selectedContact);

    if (!id) {
      setError("Invalid enquiry.");
      return;
    }

    try {
      setSaving(true);
      clearMessages();

      const response = await api.patch(
        `/contact/${id}`,
        {
          status: editStatus,
          adminNote: adminNote.trim(),
        }
      );

      const updated =
        response?.data?.contact ||
        response?.data?.data ||
        response?.data;

      setSelectedContact((prev) => ({
        ...prev,
        ...(updated || {}),
        status: editStatus,
        adminNote: adminNote.trim(),
      }));

      await Promise.all([
        loadContacts(),
        loadStats(),
      ]);

      showSuccess(
        "Enquiry updated successfully."
      );
    } catch (err) {
      console.error(
        "Update contact error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Unable to update enquiry."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     DELETE CONTACT
  ========================================================= */

  const handleDelete = async (contact = null) => {
    const target =
      contact || selectedContact;

    if (!target) return;

    const id = getContactId(target);

    if (!id) {
      setError("Invalid enquiry.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);
      clearMessages();

      await api.delete(`/contact/${id}`);

      if (
        selectedContact &&
        getContactId(selectedContact) === id
      ) {
        closeDetails();
      }

      await Promise.all([
        loadContacts(),
        loadStats(),
      ]);

      showSuccess(
        "Enquiry deleted successfully."
      );
    } catch (err) {
      console.error(
        "Delete contact error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Unable to delete enquiry."
      );
    } finally {
      setDeleting(false);
    }
  };

  /* =========================================================
     STAT CARDS
  ========================================================= */

  const statCards = useMemo(
    () => [
      {
        title: "Total Enquiries",
        value: stats.total,
        icon: <FiMessageSquare />,
        key: "all",
      },
      {
        title: "New",
        value: stats.new,
        icon: <FiMail />,
        key: "new",
      },
      {
        title: "Read",
        value: stats.read,
        icon: <FiEye />,
        key: "read",
      },
      {
        title: "Replied",
        value: stats.replied,
        icon: <FiSend />,
        key: "replied",
      },
    ],
    [stats]
  );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="admin-contacts-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .admin-contacts-page {
          width: 100%;
          min-height: 100vh;
          background: #f4f7fb;
          color: #0b2740;
          padding: 38px 34px 60px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .contacts-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 28px;
        }

        .contacts-heading h1 {
          margin: 0 0 8px;
          color: #09233a;
          font-size: 34px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.6px;
        }

        .contacts-heading p {
          margin: 0;
          color: #69798a;
          font-size: 15px;
        }

        .refresh-btn {
          min-height: 46px;
          padding: 0 18px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: 1px solid #d9e0e7;
          border-radius: 8px;

          background: #ffffff;
          color: #304458;

          font-size: 13px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .refresh-btn:hover {
          background: #f7f9fb;
          border-color: #bfcbd6;
          transform: translateY(-1px);
        }

        .refresh-btn svg {
          font-size: 17px;
        }

        /* =====================================================
           ALERTS
        ===================================================== */

        .admin-alert {
          margin-bottom: 22px;
          padding: 13px 16px;

          display: flex;
          align-items: center;
          gap: 10px;

          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .admin-alert-success {
          background: #eef7f1;
          border: 1px solid #cde4d5;
          color: #27623d;
        }

        .admin-alert-error {
          background: #fbf0f0;
          border: 1px solid #e8cece;
          color: #8a3d3d;
        }

        /* =====================================================
           STATISTICS
        ===================================================== */

        .contact-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 28px;
        }

        .contact-stat-card {
          min-height: 112px;
          padding: 20px;

          display: flex;
          align-items: center;
          gap: 15px;

          background: #ffffff;

          border: 1px solid #e0e6ec;
          border-radius: 10px;

          box-shadow:
            0 4px 15px rgba(10, 35, 55, 0.04);
        }

        .contact-stat-icon {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #f2f5f8;
          color: #09233a;

          font-size: 21px;
        }

        .contact-stat-info span {
          display: block;

          margin-bottom: 5px;

          color: #69798a;

          font-size: 12px;
        }

        .contact-stat-info strong {
          display: block;

          color: #09233a;

          font-size: 25px;
          font-weight: 800;
        }

        /* =====================================================
           FILTER BAR
        ===================================================== */

        .contacts-toolbar {
          margin-bottom: 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .contact-search {
          position: relative;
          flex: 1;
          max-width: 580px;
        }

        .contact-search svg {
          position: absolute;
          left: 15px;
          top: 50%;

          transform: translateY(-50%);

          color: #8c9aaa;

          font-size: 18px;
          pointer-events: none;
        }

        .contact-search input {
          width: 100%;
          height: 48px;

          padding: 0 16px 0 44px;

          background: #ffffff;

          border: 1px solid #dce3e9;
          border-radius: 8px;

          outline: none;

          color: #20384d;

          font-size: 13px;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-search input:focus {
          border-color: #7190a9;

          box-shadow:
            0 0 0 3px rgba(9, 35, 58, 0.06);
        }

        .contact-search input::placeholder {
          color: #96a2ae;
        }

        .contact-filter {
          min-width: 170px;
          height: 48px;

          padding: 0 38px 0 14px;

          background: #ffffff;

          border: 1px solid #dce3e9;
          border-radius: 8px;

          color: #304458;

          outline: none;

          font-size: 13px;

          cursor: pointer;
        }

        /* =====================================================
           TABLE CARD
        ===================================================== */

        .contacts-table-card {
          overflow: hidden;

          background: #ffffff;

          border: 1px solid #dfe6eb;
          border-radius: 10px;

          box-shadow:
            0 5px 20px rgba(10, 35, 55, 0.04);
        }

        .contacts-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .contacts-table {
          width: 100%;
          min-width: 900px;

          border-collapse: collapse;
        }

        .contacts-table thead {
          background: #f8fafc;
        }

        .contacts-table th {
          padding: 15px 17px;

          border-bottom: 1px solid #e2e7ec;

          color: #657689;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.7px;
          text-align: left;
          text-transform: uppercase;

          white-space: nowrap;
        }

        .contacts-table td {
          padding: 17px;

          border-bottom: 1px solid #edf0f3;

          color: #33495c;

          font-size: 12px;

          vertical-align: middle;
        }

        .contacts-table tbody tr {
          transition: background 0.2s ease;
        }

        .contacts-table tbody tr:hover {
          background: #fafcfd;
        }

        .contacts-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* =====================================================
           CUSTOMER
        ===================================================== */

        .contact-customer {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 180px;
        }

        .contact-avatar {
          width: 37px;
          height: 37px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #eef2f6;
          color: #17344d;

          border-radius: 50%;

          font-size: 14px;
          font-weight: 800;
        }

        .contact-customer-name {
          margin-bottom: 3px;

          color: #09233a;

          font-size: 12px;
          font-weight: 800;
        }

        .contact-customer-email {
          color: #83909d;
          font-size: 10px;
        }

        /* =====================================================
           SUBJECT
        ===================================================== */

        .contact-subject {
          max-width: 190px;

          color: #21394e;

          font-weight: 700;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* =====================================================
           STATUS
        ===================================================== */

        .contact-status {
          display: inline-flex;
          align-items: center;

          min-width: 70px;

          padding: 6px 9px;

          border-radius: 20px;

          font-size: 10px;
          font-weight: 800;

          text-transform: capitalize;
        }

        .status-new {
          background: #edf4fb;
          color: #2e648d;
        }

        .status-read {
          background: #f1f3f5;
          color: #66727e;
        }

        .status-replied {
          background: #edf7f1;
          color: #35714d;
        }

        .status-closed {
          background: #f1f1f1;
          color: #777777;
        }

        /* =====================================================
           ACTIONS
        ===================================================== */

        .contact-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .contact-action-btn {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #dce3e8;
          border-radius: 7px;

          background: #ffffff;

          color: #536576;

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }

        .contact-action-btn:hover {
          background: #f2f5f7;
          border-color: #c7d1d9;
          color: #09233a;
        }

        .contact-action-delete:hover {
          background: #fff3f3;
          border-color: #e8caca;
          color: #a13e3e;
        }

        /* =====================================================
           EMPTY STATE
        ===================================================== */

        .contact-empty {
          min-height: 330px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 40px;

          text-align: center;
        }

        .contact-empty-icon {
          width: 65px;
          height: 65px;

          margin-bottom: 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #f0f3f6;
          color: #8b98a5;

          font-size: 28px;
        }

        .contact-empty h3 {
          margin: 0 0 7px;

          color: #09233a;

          font-size: 17px;
          font-weight: 800;
        }

        .contact-empty p {
          margin: 0;

          color: #81909e;

          font-size: 12px;
        }

        /* =====================================================
           LOADING
        ===================================================== */

        .contacts-loading {
          min-height: 330px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #6e7d8c;
          font-size: 13px;
        }

        .loading-spinner {
          width: 28px;
          height: 28px;

          margin-right: 12px;

          border: 3px solid #e1e7ec;
          border-top-color: #09233a;

          border-radius: 50%;

          animation:
            contactSpin 0.8s linear infinite;
        }

        @keyframes contactSpin {
          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           PAGINATION
        ===================================================== */

        .contacts-pagination {
          padding: 15px 17px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-top: 1px solid #edf0f3;
        }

        .pagination-info {
          color: #788795;
          font-size: 11px;
        }

        .pagination-buttons {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pagination-btn {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;

          border: 1px solid #dce3e8;
          border-radius: 6px;

          color: #536576;

          cursor: pointer;
        }

        .pagination-btn:hover:not(:disabled) {
          background: #f3f6f8;
          color: #09233a;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-current {
          min-width: 34px;
          height: 34px;

          padding: 0 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #09233a;
          color: #ffffff;

          border-radius: 6px;

          font-size: 11px;
          font-weight: 800;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .contact-modal-overlay {
          position: fixed;
          inset: 0;

          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 25px;

          background: rgba(4, 17, 28, 0.62);

          backdrop-filter: blur(4px);
        }

        .contact-modal {
          width: 100%;
          max-width: 760px;
          max-height: 90vh;

          overflow-y: auto;

          background: #ffffff;

          border-radius: 12px;

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.25);
        }

        .contact-modal-header {
          padding: 22px 25px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom: 1px solid #e7ebef;
        }

        .contact-modal-header h2 {
          margin: 0;

          color: #09233a;

          font-size: 21px;
          font-weight: 800;
        }

        .modal-close {
          width: 35px;
          height: 35px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #dde4e9;
          border-radius: 7px;

          background: #ffffff;
          color: #607181;

          cursor: pointer;
        }

        .modal-close:hover {
          background: #f4f6f8;
          color: #09233a;
        }

        .contact-modal-body {
          padding: 25px;
        }

        .contact-detail-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;

          margin-bottom: 25px;
        }

        .contact-detail-box {
          padding: 17px;

          background: #f8fafb;

          border: 1px solid #e2e7eb;
          border-radius: 8px;
        }

        .contact-detail-label {
          margin-bottom: 7px;

          color: #82909d;

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .contact-detail-value {
          color: #1f384d;

          font-size: 12px;
          font-weight: 700;

          word-break: break-word;
        }

        .contact-detail-value a {
          color: #1f536f;
          text-decoration: none;
        }

        .contact-detail-value a:hover {
          text-decoration: underline;
        }

        .contact-message-box {
          margin-bottom: 22px;
        }

        .contact-message-box h3 {
          margin: 0 0 9px;

          color: #09233a;

          font-size: 13px;
          font-weight: 800;
        }

        .contact-message {
          padding: 17px;

          background: #f8fafb;

          border: 1px solid #e2e7eb;
          border-radius: 8px;

          color: #536574;

          font-size: 12px;
          line-height: 1.75;

          white-space: pre-wrap;
          word-break: break-word;
        }

        .contact-edit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;

          margin-bottom: 20px;
        }

        .contact-field label {
          display: block;

          margin-bottom: 7px;

          color: #536575;

          font-size: 10px;
          font-weight: 800;

          text-transform: uppercase;
        }

        .contact-field select,
        .contact-field textarea {
          width: 100%;

          border: 1px solid #dbe2e7;
          border-radius: 7px;

          background: #ffffff;

          color: #263e52;

          outline: none;

          font-family: inherit;
          font-size: 12px;
        }

        .contact-field select {
          height: 42px;
          padding: 0 12px;
        }

        .contact-field textarea {
          min-height: 90px;
          padding: 11px 12px;

          resize: vertical;
        }

        .contact-field select:focus,
        .contact-field textarea:focus {
          border-color: #6c879d;

          box-shadow:
            0 0 0 3px rgba(9, 35, 58, 0.06);
        }

        .contact-modal-footer {
          padding: 18px 25px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          border-top: 1px solid #e7ebef;
        }

        .modal-delete-btn {
          min-height: 40px;

          padding: 0 14px;

          display: flex;
          align-items: center;
          gap: 8px;

          border: 1px solid #e3caca;
          border-radius: 7px;

          background: #fff7f7;
          color: #a23e3e;

          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
        }

        .modal-delete-btn:hover {
          background: #fff0f0;
        }

        .modal-save-btn {
          min-height: 40px;

          padding: 0 18px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          border: 1px solid #09233a;
          border-radius: 7px;

          background: #09233a;
          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          cursor: pointer;
        }

        .modal-save-btn:hover:not(:disabled) {
          background: #153b57;
        }

        .modal-save-btn:disabled,
        .modal-delete-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .admin-contacts-page {
            padding: 30px 25px 50px;
          }

          .contact-stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .contacts-header {
            flex-direction: column;
          }

          .refresh-btn {
            width: 100%;
          }

          .contacts-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .contact-search {
            max-width: none;
          }

          .contact-filter {
            width: 100%;
          }

          .contact-detail-top,
          .contact-edit-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .admin-contacts-page {
            padding: 22px 15px 40px;
          }

          .contacts-heading h1 {
            font-size: 27px;
          }

          .contacts-heading p {
            font-size: 12px;
          }

          .contact-stat-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .contact-stat-card {
            min-height: 90px;
          }

          .contacts-pagination {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .contact-modal-overlay {
            padding: 12px;
          }

          .contact-modal-header {
            padding: 18px;
          }

          .contact-modal-body {
            padding: 18px;
          }

          .contact-modal-footer {
            padding: 15px 18px;
          }

          .modal-delete-btn,
          .modal-save-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>

      {/* =======================================================
          HEADER
      ======================================================= */}

      <div className="contacts-header">
        <div className="contacts-heading">
          <h1>Contact Enquiries</h1>

          <p>
            View and manage enquiries submitted by website visitors
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={handleRefresh}
          disabled={loading}
        >
          <FiRefreshCw
            className={
              loading
                ? "loading-spinner"
                : ""
            }
          />

          Refresh
        </button>
      </div>

      {/* =======================================================
          ALERTS
      ======================================================= */}

      {success && (
        <div className="admin-alert admin-alert-success">
          <FiCheck />

          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="admin-alert admin-alert-error">
          <FiAlertCircle />

          <span>{error}</span>
        </div>
      )}

      {/* =======================================================
          STATISTICS
      ======================================================= */}

      <div className="contact-stat-grid">
        {statCards.map((item) => (
          <button
            key={item.key}
            className="contact-stat-card"
            onClick={() => {
              setStatus(item.key);
              setPage(1);
            }}
            style={{
              border: "1px solid #e0e6ec",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <div className="contact-stat-icon">
              {item.icon}
            </div>

            <div className="contact-stat-info">
              <span>{item.title}</span>

              <strong>
                {statsLoading ? "—" : item.value}
              </strong>
            </div>
          </button>
        ))}
      </div>

      {/* =======================================================
          TOOLBAR
      ======================================================= */}

      <div className="contacts-toolbar">
        <div className="contact-search">
          <FiSearch />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search name, email, subject or phone..."
          />
        </div>

        <select
          className="contact-filter"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="all">
            All Status
          </option>

          <option value="new">
            New
          </option>

          <option value="read">
            Read
          </option>

          <option value="replied">
            Replied
          </option>

          <option value="closed">
            Closed
          </option>
        </select>
      </div>

      {/* =======================================================
          TABLE
      ======================================================= */}

      <div className="contacts-table-card">
        {loading ? (
          <div className="contacts-loading">
            <div className="loading-spinner"></div>

            Loading enquiries...
          </div>
        ) : contacts.length === 0 ? (
          <div className="contact-empty">
            <div className="contact-empty-icon">
              <FiMessageSquare />
            </div>

            <h3>
              No enquiries found
            </h3>

            <p>
              {search || status !== "all"
                ? "Try changing your search or filter."
                : "Website enquiries will appear here."}
            </p>
          </div>
        ) : (
          <>
            <div className="contacts-table-wrapper">
              <table className="contacts-table">
                <thead>
                  <tr>
                    <th>Visitor</th>
                    <th>Phone</th>
                    <th>Requirement</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((contact) => {
                    const id =
                      getContactId(contact);

                    const name =
                      contact.name ||
                      "Unknown";

                    const email =
                      contact.email ||
                      "—";

                    const phone =
                      contact.phone ||
                      "—";

                    const subject =
                      contact.subject ||
                      contact.service ||
                      "General Enquiry";

                    const contactStatus =
                      contact.status ||
                      "new";

                    return (
                      <tr key={id}>
                        {/* VISITOR */}

                        <td>
                          <div className="contact-customer">
                            <div className="contact-avatar">
                              {name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>
                              <div className="contact-customer-name">
                                {name}
                              </div>

                              <div className="contact-customer-email">
                                {email}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* PHONE */}

                        <td>
                          {phone !== "—" ? (
                            <a
                              href={`tel:${phone}`}
                              style={{
                                color:
                                  "#315b76",
                                textDecoration:
                                  "none",
                              }}
                            >
                              {phone}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>

                        {/* REQUIREMENT */}

                        <td>
                          <div className="contact-subject">
                            {subject}
                          </div>
                        </td>

                        {/* DATE */}

                        <td>
                          {formatDate(
                            contact.createdAt
                          )}
                        </td>

                        {/* STATUS */}

                        <td>
                          <span
                            className={`contact-status status-${contactStatus}`}
                          >
                            {getStatusLabel(
                              contactStatus
                            )}
                          </span>
                        </td>

                        {/* ACTIONS */}

                        <td>
                          <div className="contact-actions">
                            <button
                              className="contact-action-btn"
                              title="View enquiry"
                              onClick={() =>
                                openDetails(
                                  contact
                                )
                              }
                            >
                              <FiEye />
                            </button>

                            <button
                              className="contact-action-btn contact-action-delete"
                              title="Delete enquiry"
                              onClick={() =>
                                handleDelete(
                                  contact
                                )
                              }
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* =================================================
                PAGINATION
            ================================================= */}

            <div className="contacts-pagination">
              <div className="pagination-info">
                Showing page{" "}
                <strong>
                  {pagination.page}
                </strong>{" "}
                of{" "}
                <strong>
                  {pagination.pages}
                </strong>

                {pagination.total > 0 && (
                  <>
                    {" "}
                    • {pagination.total} total
                  </>
                )}
              </div>

              <div className="pagination-buttons">
                <button
                  className="pagination-btn"
                  disabled={page <= 1}
                  onClick={() =>
                    setPage((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                >
                  <FiChevronLeft />
                </button>

                <div className="pagination-current">
                  {page}
                </div>

                <button
                  className="pagination-btn"
                  disabled={
                    page >= pagination.pages
                  }
                  onClick={() =>
                    setPage((prev) =>
                      Math.min(
                        pagination.pages,
                        prev + 1
                      )
                    )
                  }
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* =======================================================
          DETAILS MODAL
      ======================================================= */}

      {showDetails &&
        selectedContact && (
          <div
            className="contact-modal-overlay"
            onMouseDown={(e) => {
              if (
                e.target ===
                e.currentTarget
              ) {
                closeDetails();
              }
            }}
          >
            <div className="contact-modal">
              {/* HEADER */}

              <div className="contact-modal-header">
                <h2>
                  Enquiry Details
                </h2>

                <button
                  className="modal-close"
                  onClick={closeDetails}
                  disabled={
                    saving || deleting
                  }
                >
                  <FiX />
                </button>
              </div>

              {/* BODY */}

              <div className="contact-modal-body">

                {/* CUSTOMER INFORMATION */}

                <div className="contact-detail-top">

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Customer Name
                    </div>

                    <div className="contact-detail-value">
                      <FiUser
                        style={{
                          marginRight: 6,
                          verticalAlign:
                            "middle",
                        }}
                      />

                      {selectedContact.name ||
                        "—"}
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Submitted On
                    </div>

                    <div className="contact-detail-value">
                      <FiCalendar
                        style={{
                          marginRight: 6,
                          verticalAlign:
                            "middle",
                        }}
                      />

                      {formatDateTime(
                        selectedContact.createdAt
                      )}
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Email
                    </div>

                    <div className="contact-detail-value">
                      <FiMail
                        style={{
                          marginRight: 6,
                          verticalAlign:
                            "middle",
                        }}
                      />

                      <a
                        href={`mailto:${selectedContact.email}`}
                      >
                        {selectedContact.email ||
                          "—"}
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Phone
                    </div>

                    <div className="contact-detail-value">
                      <FiPhone
                        style={{
                          marginRight: 6,
                          verticalAlign:
                            "middle",
                        }}
                      />

                      {selectedContact.phone ? (
                        <a
                          href={`tel:${selectedContact.phone}`}
                        >
                          {
                            selectedContact.phone
                          }
                        </a>
                      ) : (
                        "—"
                      )}
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Solar Requirement
                    </div>

                    <div className="contact-detail-value">
                      {selectedContact.subject ||
                        selectedContact.service ||
                        "General Enquiry"}
                    </div>
                  </div>

                  <div className="contact-detail-box">
                    <div className="contact-detail-label">
                      Current Status
                    </div>

                    <div className="contact-detail-value">
                      <span
                        className={`contact-status status-${
                          selectedContact.status ||
                          "new"
                        }`}
                      >
                        {getStatusLabel(
                          selectedContact.status ||
                            "new"
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}

                <div className="contact-message-box">
                  <h3>
                    Customer Message
                  </h3>

                  <div className="contact-message">
                    {selectedContact.message ||
                      "No message provided."}
                  </div>
                </div>

                {/* ADMIN UPDATE */}

                <div className="contact-edit-grid">

                  <div className="contact-field">
                    <label>
                      Update Status
                    </label>

                    <select
                      value={editStatus}
                      onChange={(e) =>
                        setEditStatus(
                          e.target.value
                        )
                      }
                      disabled={saving}
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="read">
                        Read
                      </option>

                      <option value="replied">
                        Replied
                      </option>

                      <option value="closed">
                        Closed
                      </option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label>
                      Last Updated
                    </label>

                    <div
                      style={{
                        height: 42,
                        padding: "0 12px",
                        display: "flex",
                        alignItems:
                          "center",
                        border:
                          "1px solid #dbe2e7",
                        borderRadius: 7,
                        color: "#627383",
                        fontSize: 11,
                      }}
                    >
                      <FiClock
                        style={{
                          marginRight: 7,
                        }}
                      />

                      {formatDateTime(
                        selectedContact.updatedAt
                      )}
                    </div>
                  </div>

                </div>

                <div className="contact-field">
                  <label>
                    Admin Note
                  </label>

                  <textarea
                    value={adminNote}
                    onChange={(e) =>
                      setAdminNote(
                        e.target.value
                      )
                    }
                    placeholder="Add an internal note about this enquiry..."
                    maxLength={2000}
                    disabled={saving}
                  />
                </div>
              </div>

              {/* FOOTER */}

              <div className="contact-modal-footer">

                <button
                  className="modal-delete-btn"
                  onClick={() =>
                    handleDelete(
                      selectedContact
                    )
                  }
                  disabled={
                    deleting || saving
                  }
                >
                  <FiTrash2 />

                  {deleting
                    ? "Deleting..."
                    : "Delete"}
                </button>

                <button
                  className="modal-save-btn"
                  onClick={handleUpdate}
                  disabled={saving || deleting}
                >
                  {saving ? (
                    <>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FiCheck />
                      Save Changes
                    </>
                  )}
                </button>

              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default AdminContacts;