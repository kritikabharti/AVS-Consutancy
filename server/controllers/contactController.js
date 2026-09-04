import Contact from "../models/Contact.js";

/* =========================================================
   CREATE CONTACT MESSAGE
   PUBLIC API
   POST /api/contact
========================================================= */

export const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject and message are required",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const cleanPhone = phone ? phone.trim() : "";

    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must contain at least 2 characters",
      });
    }

    if (cleanMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must contain at least 10 characters",
      });
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    /*
      Simple duplicate protection.

      Prevents exactly the same email + message from
      being submitted repeatedly within 2 minutes.
    */

    const twoMinutesAgo = new Date(
      Date.now() - 2 * 60 * 1000
    );

    const duplicate = await Contact.findOne({
      email: cleanEmail,
      message: cleanMessage,
      createdAt: {
        $gte: twoMinutesAgo,
      },
    });

    if (duplicate) {
      return res.status(429).json({
        success: false,
        message:
          "Your message was already submitted. Please wait before submitting again.",
      });
    }

    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      subject: cleanSubject,
      message: cleanMessage,

      ipAddress:
        req.ip ||
        req.headers["x-forwarded-for"] ||
        "",

      userAgent:
        req.headers["user-agent"] || "",
    });

    return res.status(201).json({
      success: true,
      message:
        "Thank you for contacting AVS Solar Consultancy. We will get back to you soon.",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    console.error(
      "Create contact error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to submit your message",
    });
  }
};


/* =========================================================
   GET ALL CONTACTS
   ADMIN ONLY
   GET /api/contact
========================================================= */

export const getContacts = async (req, res) => {
  try {
    const {
      status,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    const pageNumber =
      Math.max(Number(page), 1);

    const limitNumber = Math.min(
      Math.max(Number(limit), 1),
      100
    );

    const skip =
      (pageNumber - 1) * limitNumber;

    const filter = {};

    if (
      status &&
      ["new", "read", "replied", "closed"].includes(status)
    ) {
      filter.status = status;
    }

    if (search && search.trim()) {
      const searchRegex = new RegExp(
        search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      filter.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { subject: searchRegex },
        { phone: searchRegex },
      ];
    }

    const [contacts, total] =
      await Promise.all([
        Contact.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limitNumber)
          .lean(),

        Contact.countDocuments(filter),
      ]);

    return res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        total,
        pages: Math.ceil(
          total / limitNumber
        ),
      },
    });
  } catch (error) {
    console.error(
      "Get contacts error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact messages",
    });
  }
};


/* =========================================================
   GET SINGLE CONTACT
   ADMIN ONLY
   GET /api/contact/:id
========================================================= */

export const getContactById = async (
  req,
  res
) => {
  try {
    const contact =
      await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error(
      "Get contact error:",
      error
    );

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact message",
    });
  }
};


/* =========================================================
   UPDATE CONTACT STATUS
   ADMIN ONLY
   PATCH /api/contact/:id
========================================================= */

export const updateContact = async (
  req,
  res
) => {
  try {
    const {
      status,
      adminNote,
    } = req.body;

    const update = {};

    if (status !== undefined) {
      if (
        !["new", "read", "replied", "closed"].includes(
          status
        )
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact status",
        });
      }

      update.status = status;
    }

    if (adminNote !== undefined) {
      update.adminNote =
        String(adminNote).trim().slice(0, 2000);
    }

    const contact =
      await Contact.findByIdAndUpdate(
        req.params.id,
        update,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact message updated successfully",
      data: contact,
    });
  } catch (error) {
    console.error(
      "Update contact error:",
      error
    );

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to update contact message",
    });
  }
};


/* =========================================================
   DELETE CONTACT
   ADMIN ONLY
   DELETE /api/contact/:id
========================================================= */

export const deleteContact = async (
  req,
  res
) => {
  try {
    const contact =
      await Contact.findByIdAndDelete(
        req.params.id
      );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete contact error:",
      error
    );

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to delete contact message",
    });
  }
};


/* =========================================================
   CONTACT STATISTICS
   ADMIN ONLY
   GET /api/contact/stats
========================================================= */

export const getContactStats = async (
  req,
  res
) => {
  try {
    const [
      total,
      newMessages,
      readMessages,
      repliedMessages,
      closedMessages,
    ] = await Promise.all([
      Contact.countDocuments(),

      Contact.countDocuments({
        status: "new",
      }),

      Contact.countDocuments({
        status: "read",
      }),

      Contact.countDocuments({
        status: "replied",
      }),

      Contact.countDocuments({
        status: "closed",
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        total,
        new: newMessages,
        read: readMessages,
        replied: repliedMessages,
        closed: closedMessages,
      },
    });
  } catch (error) {
    console.error(
      "Contact stats error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contact statistics",
    });
  }
};