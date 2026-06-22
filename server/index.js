// server/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/User.js"; // Always include .js at the end for ES modules

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);


// MongoDB Link
const MONGO_URI = process.env.MONGO_URI; 

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Database connection failed:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
