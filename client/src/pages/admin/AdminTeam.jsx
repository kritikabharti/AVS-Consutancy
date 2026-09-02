import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiBookOpen,
  FiGlobe,
  FiLinkedin,
  FiX,
  FiCheck,
  FiSearch,
  FiRefreshCw,
} from "react-icons/fi";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./AdminTeam.css";

const emptyForm = {
  name: "",
  designation: "",
  email: "",
  phone: "",
  experience: "",
  qualification: "",
  location: "",
  bio: "",
  skills: "",
  image: "",
  linkedin: "",
  website: "",
  isActive: true,
  displayOrder: 0,
};

const AdminTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [form, setForm] = useState(emptyForm);

  // ============================================================
  // LOAD TEAM
  // ============================================================

  const loadTeam = async () => {
    try {
      setLoading(true);

      const response = await api.get("/team");

      const members =
        response?.data?.team ||
        response?.data?.members ||
        response?.team ||
        response?.members ||
        [];

      setTeam(Array.isArray(members) ? members : []);
    } catch (error) {
      console.error("Load team error:", error);

      toast.error(
        error?.message || "Unable to load team members"
      );

      setTeam([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
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
  // OPEN ADD MODAL
  // ============================================================

  const handleAdd = () => {
    setEditingMember(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  // ============================================================
  // OPEN EDIT MODAL
  // ============================================================

  const handleEdit = (member) => {
    setEditingMember(member);

    setForm({
      name: member.name || "",
      designation: member.designation || "",
      email: member.email || "",
      phone: member.phone || "",
      experience: member.experience || "",
      qualification: member.qualification || "",
      location: member.location || "",
      bio: member.bio || "",
      skills: Array.isArray(member.skills)
        ? member.skills.join(", ")
        : member.skills || "",
      image: member.image || "",
      linkedin: member.linkedin || "",
      website: member.website || "",
      isActive:
        typeof member.isActive === "boolean"
          ? member.isActive
          : true,
      displayOrder: member.displayOrder ?? 0,
    });

    setShowModal(true);
  };

  // ============================================================
  // CLOSE MODAL
  // ============================================================

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingMember(null);
    setForm(emptyForm);
  };

  // ============================================================
  // VALIDATION
  // ============================================================

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter team member name");
      return false;
    }

    if (!form.designation.trim()) {
      toast.error("Please enter designation");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Please enter email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (form.phone.trim()) {
      const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

      if (!phoneRegex.test(form.phone.trim())) {
        toast.error("Please enter a valid phone number");
        return false;
      }
    }

    return true;
  };

  // ============================================================
  // SAVE TEAM MEMBER
  // ============================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSaving(true);

      const payload = {
        name: form.name.trim(),
        designation: form.designation.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        experience: form.experience.trim(),
        qualification: form.qualification.trim(),
        location: form.location.trim(),
        bio: form.bio.trim(),
        image: form.image.trim(),
        linkedin: form.linkedin.trim(),
        website: form.website.trim(),
        isActive: Boolean(form.isActive),
        displayOrder: Number(form.displayOrder) || 0,

        skills: form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };

      if (editingMember) {
        await api.put(
          `/team/${editingMember._id}`,
          payload
        );

        toast.success("Team member updated successfully");
      } else {
        await api.post("/team", payload);

        toast.success("Team member added successfully");
      }

      closeModal();
      await loadTeam();
    } catch (error) {
      console.error("Save team member error:", error);

      toast.error(
        error?.message ||
          `Unable to ${
            editingMember ? "update" : "add"
          } team member`
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================================
  // DELETE
  // ============================================================

  const handleDelete = async (member) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${member.name}"?`
    );

    if (!confirmed) return;

    try {
      await api.delete(`/team/${member._id}`);

      toast.success("Team member deleted successfully");

      setTeam((prev) =>
        prev.filter((item) => item._id !== member._id)
      );
    } catch (error) {
      console.error("Delete team member error:", error);

      toast.error(
        error?.message || "Unable to delete team member"
      );
    }
  };

  // ============================================================
  // TOGGLE STATUS
  // ============================================================

  const handleToggleStatus = async (member) => {
    try {
      await api.put(`/team/${member._id}`, {
        ...member,
        isActive: !member.isActive,
        skills: Array.isArray(member.skills)
          ? member.skills
          : [],
      });

      toast.success(
        member.isActive
          ? "Team member deactivated"
          : "Team member activated"
      );

      setTeam((prev) =>
        prev.map((item) =>
          item._id === member._id
            ? {
                ...item,
                isActive: !item.isActive,
              }
            : item
        )
      );
    } catch (error) {
      console.error("Toggle status error:", error);

      toast.error(
        error?.message || "Unable to update status"
      );
    }
  };

  // ============================================================
  // SEARCH
  // ============================================================

  const filteredTeam = team.filter((member) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      member.name?.toLowerCase().includes(query) ||
      member.designation?.toLowerCase().includes(query) ||
      member.email?.toLowerCase().includes(query) ||
      member.location?.toLowerCase().includes(query) ||
      (Array.isArray(member.skills)
        ? member.skills.join(" ").toLowerCase().includes(query)
        : false)
    );
  });

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="admin-team-page">
      {/* HEADER */}

      <div className="admin-team-header">
        <div>
          <h1>Team Management</h1>
          <p>
            Manage your solar consultancy team members
          </p>
        </div>

        <button
          type="button"
          className="admin-team-add-btn"
          onClick={handleAdd}
        >
          <FiPlus />
          Add Team Member
        </button>
      </div>

      {/* TOOLBAR */}

      <div className="admin-team-toolbar">
        <div className="admin-team-search">
          <FiSearch />

          <input
            type="text"
            placeholder="Search team members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="admin-team-refresh"
          onClick={loadTeam}
          disabled={loading}
          title="Refresh"
        >
          <FiRefreshCw
            className={loading ? "admin-team-spin" : ""}
          />
          Refresh
        </button>
      </div>

      {/* STATS */}

      <div className="admin-team-stats">
        <div className="admin-team-stat-card">
          <div className="admin-team-stat-icon">
            <FiUser />
          </div>

          <div>
            <span>Total Members</span>
            <strong>{team.length}</strong>
          </div>
        </div>

        <div className="admin-team-stat-card">
          <div className="admin-team-stat-icon">
            <FiCheck />
          </div>

          <div>
            <span>Active</span>
            <strong>
              {team.filter((member) => member.isActive).length}
            </strong>
          </div>
        </div>

        <div className="admin-team-stat-card">
          <div className="admin-team-stat-icon">
            <FiX />
          </div>

          <div>
            <span>Inactive</span>
            <strong>
              {team.filter((member) => !member.isActive).length}
            </strong>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      {loading ? (
        <div className="admin-team-loading">
          <div className="admin-team-loader"></div>
          <p>Loading team members...</p>
        </div>
      ) : filteredTeam.length === 0 ? (
        <div className="admin-team-empty">
          <FiUser />

          <h3>
            {search
              ? "No team members found"
              : "No team members yet"}
          </h3>

          <p>
            {search
              ? "Try changing your search."
              : "Add your first team member to get started."}
          </p>

          {!search && (
            <button
              type="button"
              onClick={handleAdd}
              className="admin-team-add-btn"
            >
              <FiPlus />
              Add Team Member
            </button>
          )}
        </div>
      ) : (
        <div className="admin-team-grid">
          {filteredTeam.map((member) => (
            <div
              className={`admin-team-card ${
                !member.isActive
                  ? "admin-team-card-inactive"
                  : ""
              }`}
              key={member._id}
            >
              {/* IMAGE */}

              <div className="admin-team-card-image">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display =
                        "flex";
                    }}
                  />
                ) : null}

                <div
                  className="admin-team-avatar-fallback"
                  style={{
                    display: member.image ? "none" : "flex",
                  }}
                >
                  <FiUser />
                </div>

                <span
                  className={`admin-team-status ${
                    member.isActive
                      ? "active"
                      : "inactive"
                  }`}
                >
                  {member.isActive
                    ? "Active"
                    : "Inactive"}
                </span>
              </div>

              {/* DETAILS */}

              <div className="admin-team-card-body">
                <h3>{member.name}</h3>

                <p className="admin-team-designation">
                  {member.designation}
                </p>

                {member.email && (
                  <div className="admin-team-info">
                    <FiMail />
                    <span>{member.email}</span>
                  </div>
                )}

                {member.phone && (
                  <div className="admin-team-info">
                    <FiPhone />
                    <span>{member.phone}</span>
                  </div>
                )}

                {member.location && (
                  <div className="admin-team-info">
                    <FiMapPin />
                    <span>{member.location}</span>
                  </div>
                )}

                {member.experience && (
                  <div className="admin-team-info">
                    <FiBriefcase />
                    <span>
                      {member.experience}
                    </span>
                  </div>
                )}

                {member.qualification && (
                  <div className="admin-team-info">
                    <FiBookOpen />
                    <span>
                      {member.qualification}
                    </span>
                  </div>
                )}

                {Array.isArray(member.skills) &&
                  member.skills.length > 0 && (
                    <div className="admin-team-skills">
                      {member.skills
                        .slice(0, 5)
                        .map((skill, index) => (
                          <span key={index}>
                            {skill}
                          </span>
                        ))}
                    </div>
                  )}

                <div className="admin-team-links">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <FiLinkedin />
                    </a>
                  )}

                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noreferrer"
                      title="Website"
                    >
                      <FiGlobe />
                    </a>
                  )}
                </div>
              </div>

              {/* ACTIONS */}

              <div className="admin-team-card-actions">
                <button
                  type="button"
                  className="admin-team-edit-btn"
                  onClick={() => handleEdit(member)}
                >
                  <FiEdit2 />
                  Edit
                </button>

                <button
                  type="button"
                  className={`admin-team-toggle-btn ${
                    member.isActive
                      ? "deactivate"
                      : "activate"
                  }`}
                  onClick={() =>
                    handleToggleStatus(member)
                  }
                >
                  {member.isActive
                    ? "Deactivate"
                    : "Activate"}
                </button>

                <button
                  type="button"
                  className="admin-team-delete-btn"
                  onClick={() => handleDelete(member)}
                  title="Delete"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================
          MODAL
      ======================================================== */}

      {showModal && (
        <div
          className="admin-team-modal-overlay"
          onMouseDown={(e) => {
            if (
              e.target === e.currentTarget &&
              !saving
            ) {
              closeModal();
            }
          }}
        >
          <div className="admin-team-modal">
            {/* MODAL HEADER */}

            <div className="admin-team-modal-header">
              <div>
                <h2>
                  {editingMember
                    ? "Edit Team Member"
                    : "Add Team Member"}
                </h2>

                <p>
                  {editingMember
                    ? "Update team member details"
                    : "Add a new member to your team"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                className="admin-team-modal-close"
              >
                <FiX />
              </button>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="admin-team-form"
            >
              {/* BASIC INFORMATION */}

              <div className="admin-team-section">
                <h3>Basic Information</h3>

                <div className="admin-team-form-grid">
                  <div className="admin-team-field">
                    <label>
                      Full Name *
                    </label>

                    <div className="admin-team-input-wrap">
                      <FiUser />

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>
                      Designation *
                    </label>

                    <div className="admin-team-input-wrap">
                      <FiBriefcase />

                      <input
                        type="text"
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        placeholder="e.g. Solar Consultant"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Email *</label>

                    <div className="admin-team-input-wrap">
                      <FiMail />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="member@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Phone</label>

                    <div className="admin-team-input-wrap">
                      <FiPhone />

                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Experience</label>

                    <div className="admin-team-input-wrap">
                      <FiBriefcase />

                      <input
                        type="text"
                        name="experience"
                        value={form.experience}
                        onChange={handleChange}
                        placeholder="e.g. 8 Years"
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Qualification</label>

                    <div className="admin-team-input-wrap">
                      <FiBookOpen />

                      <input
                        type="text"
                        name="qualification"
                        value={form.qualification}
                        onChange={handleChange}
                        placeholder="e.g. B.Tech Electrical"
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Location</label>

                    <div className="admin-team-input-wrap">
                      <FiMapPin />

                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="e.g. New Delhi, India"
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Display Order</label>

                    <input
                      type="number"
                      name="displayOrder"
                      value={form.displayOrder}
                      onChange={handleChange}
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* BIO */}

              <div className="admin-team-section">
                <h3>Professional Details</h3>

                <div className="admin-team-field">
                  <label>Biography</label>

                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Write a short biography..."
                    rows="5"
                  />
                </div>

                <div className="admin-team-field">
                  <label>
                    Skills
                  </label>

                  <input
                    type="text"
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="Solar Design, Project Management, Engineering"
                  />

                  <small>
                    Separate multiple skills with commas.
                  </small>
                </div>
              </div>

              {/* IMAGE */}

              <div className="admin-team-section">
                <h3>Profile & Links</h3>

                <div className="admin-team-field">
                  <label>Profile Image URL</label>

                  <input
                    type="url"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://example.com/photo.jpg"
                  />

                  {form.image && (
                    <div className="admin-team-image-preview">
                      <img
                        src={form.image}
                        alt="Preview"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="admin-team-form-grid">
                  <div className="admin-team-field">
                    <label>LinkedIn URL</label>

                    <div className="admin-team-input-wrap">
                      <FiLinkedin />

                      <input
                        type="url"
                        name="linkedin"
                        value={form.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                  </div>

                  <div className="admin-team-field">
                    <label>Website URL</label>

                    <div className="admin-team-input-wrap">
                      <FiGlobe />

                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* STATUS */}

              <div className="admin-team-status-row">
                <div>
                  <strong>Member Status</strong>
                  <p>
                    Inactive members will not appear on
                    the public team page.
                  </p>
                </div>

                <label className="admin-team-switch">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />

                  <span></span>
                </label>
              </div>

              {/* ACTIONS */}

              <div className="admin-team-modal-actions">
                <button
                  type="button"
                  className="admin-team-cancel-btn"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="admin-team-save-btn"
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span className="admin-team-btn-loader"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FiCheck />
                      {editingMember
                        ? "Update Member"
                        : "Add Member"}
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

export default AdminTeam;