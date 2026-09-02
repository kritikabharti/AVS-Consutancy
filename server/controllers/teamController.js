import TeamMember from "../models/TeamMember.js";

/* =========================================================
   GET ALL TEAM MEMBERS - ADMIN
========================================================= */

export const getAllTeamMembers = async (req, res) => {
  try {
    const team = await TeamMember.find()
      .sort({
        displayOrder: 1,
        createdAt: -1,
      })
      .lean();

    res.status(200).json({
      success: true,
      team,
    });
  } catch (error) {
    console.error("Get team members error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch team members",
    });
  }
};

/* =========================================================
   GET ACTIVE TEAM MEMBERS - PUBLIC
========================================================= */

export const getPublicTeamMembers = async (req, res) => {
  try {
    const team = await TeamMember.find({
      isActive: true,
    })
      .sort({
        displayOrder: 1,
        createdAt: -1,
      })
      .lean();

    res.status(200).json({
      success: true,
      team,
    });
  } catch (error) {
    console.error("Get public team error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch team members",
    });
  }
};

/* =========================================================
   GET SINGLE TEAM MEMBER
========================================================= */

export const getTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(
      req.params.id
    ).lean();

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      teamMember: member,
    });
  } catch (error) {
    console.error("Get team member error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch team member",
    });
  }
};

/* =========================================================
   CREATE TEAM MEMBER
========================================================= */

export const createTeamMember = async (req, res) => {
  try {
    const {
      name,
      designation,
      email,
      phone,
      experience,
      qualification,
      location,
      bio,
      skills,
      image,
      linkedin,
      website,
      isActive,
      displayOrder,
    } = req.body;

    if (!name || !designation) {
      return res.status(400).json({
        success: false,
        message: "Name and designation are required",
      });
    }

    const parsedSkills = Array.isArray(skills)
      ? skills
      : typeof skills === "string"
      ? skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean)
      : [];

    const member = await TeamMember.create({
      name: name.trim(),
      designation: designation.trim(),
      email: email?.trim() || "",
      phone: phone?.trim() || "",
      experience: experience?.trim() || "",
      qualification: qualification?.trim() || "",
      location: location?.trim() || "",
      bio: bio?.trim() || "",
      skills: parsedSkills,
      image: image?.trim() || "",
      linkedin: linkedin?.trim() || "",
      website: website?.trim() || "",
      isActive:
        isActive === undefined ? true : Boolean(isActive),
      displayOrder: Number(displayOrder) || 0,
    });

    res.status(201).json({
      success: true,
      message: "Team member added successfully",
      teamMember: member,
    });
  } catch (error) {
    console.error("Create team member error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create team member",
    });
  }
};

/* =========================================================
   UPDATE TEAM MEMBER
========================================================= */

export const updateTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    const {
      name,
      designation,
      email,
      phone,
      experience,
      qualification,
      location,
      bio,
      skills,
      image,
      linkedin,
      website,
      isActive,
      displayOrder,
    } = req.body;

    if (name !== undefined) {
      member.name = name.trim();
    }

    if (designation !== undefined) {
      member.designation = designation.trim();
    }

    if (email !== undefined) {
      member.email = email.trim();
    }

    if (phone !== undefined) {
      member.phone = phone.trim();
    }

    if (experience !== undefined) {
      member.experience = experience.trim();
    }

    if (qualification !== undefined) {
      member.qualification = qualification.trim();
    }

    if (location !== undefined) {
      member.location = location.trim();
    }

    if (bio !== undefined) {
      member.bio = bio.trim();
    }

    if (skills !== undefined) {
      member.skills = Array.isArray(skills)
        ? skills
        : String(skills)
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean);
    }

    if (image !== undefined) {
      member.image = image.trim();
    }

    if (linkedin !== undefined) {
      member.linkedin = linkedin.trim();
    }

    if (website !== undefined) {
      member.website = website.trim();
    }

    if (isActive !== undefined) {
      member.isActive =
        isActive === true ||
        isActive === "true";
    }

    if (displayOrder !== undefined) {
      member.displayOrder =
        Number(displayOrder) || 0;
    }

    await member.save();

    res.status(200).json({
      success: true,
      message: "Team member updated successfully",
      teamMember: member,
    });
  } catch (error) {
    console.error("Update team member error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update team member",
    });
  }
};

/* =========================================================
   DELETE TEAM MEMBER
========================================================= */

export const deleteTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndDelete(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
    });
  } catch (error) {
    console.error("Delete team member error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete team member",
    });
  }
};