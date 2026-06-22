// import express from "express";
// const router = express.Router();

// import Order from "../models/Order";

// // Create Order
// router.post("/place-order", async (req, res) => {
// try {
// const order = await Order.create(req.body);

// res.status(201).json({
//   success: true,
//   message: "Order placed successfully",
//   order,
// });

// } catch (error) {
// res.status(500).json({
// success: false,
// message: error.message,
// });
// }
// });

// // Get All Orders
// router.get("/", async (req, res) => {
// try {
// const orders = await Order.find().sort({
// createdAt: -1,
// });

// res.status(200).json({
//   success: true,
//   orders,
// });

// } catch (error) {
// res.status(500).json({
// success: false,
// message: error.message,
// });
// }
// });
// router.post("/place-order", placeOrder);

// export default router;
