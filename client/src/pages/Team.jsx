import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/api\/?$/, "").replace(/\/+$/, "");

function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`${API_URL}/api/team/public`);
        const data = await response.json();

        const members = data?.team || data?.members || [];
        setTeam(Array.isArray(members) ? members : []);
      } catch (error) {
        console.error("Failed to load team members:", error);
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <>
      <Navbar />

      <section style={{ padding: "80px 20px 40px", background: "#f5f7f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <p style={{ color: "#1d63a8", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Our Team
            </p>
            <h1 style={{ fontSize: "2.8rem", margin: "12px 0 0", color: "#0f172a" }}>
              Meet the AVS Solar Experts
            </h1>
          </motion.div>

          {loading ? (
            <div style={{ textAlign: "center", color: "#374151", fontSize: "1.1rem" }}>
              Loading team members...
            </div>
          ) : team.length === 0 ? (
            <div style={{ textAlign: "center", color: "#374151", fontSize: "1.1rem" }}>
              Our team is being updated. Please check back soon.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
              {team.map((member) => (
                <motion.article
                  key={member._id || member.id || member.email}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    background: "#fff",
                    borderRadius: "18px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                    overflow: "hidden",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                  }}
                >
                  <div style={{ height: "220px", background: "linear-gradient(135deg, #dbeafe, #eff6ff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ fontSize: "3rem", fontWeight: 700, color: "#1d63a8" }}>
                        {member.name?.charAt(0)?.toUpperCase() || "A"}
                      </div>
                    )}
                  </div>

                  <div style={{ padding: "22px 20px 26px" }}>
                    <h3 style={{ margin: "0 0 6px", fontSize: "1.45rem", color: "#0f172a" }}>
                      {member.name}
                    </h3>
                    <p style={{ margin: "0 0 12px", color: "#1d63a8", fontWeight: 600 }}>
                      {member.designation}
                    </p>

                    {member.bio && (
                      <p style={{ margin: "0 0 14px", color: "#475569", lineHeight: 1.6 }}>
                        {member.bio}
                      </p>
                    )}

                    {member.skills && Array.isArray(member.skills) && member.skills.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                        {member.skills.slice(0, 5).map((skill) => (
                          <span
                            key={`${member._id || member.email}-${skill}`}
                            style={{
                              background: "#e0f2fe",
                              color: "#0c4a6e",
                              borderRadius: "999px",
                              padding: "6px 10px",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Team;