import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
},

email: {
  type: String,
  required: true,
},

phone: {
  type: String,
  required: true,
},

address: {
  type: String,
  required: true,
},

productName: {
  type: String,
  default: "550W Solar Panel",
},

price: {
  type: Number,
  default: 18999,
},

orderStatus: {
  type: String,
  default: "Pending",
},

},
{
timestamps: true,
}
);

module.exports = mongoose.model("Order", orderSchema);
