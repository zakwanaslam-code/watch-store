import mongoose from "mongoose";

const sellRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    condition: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const SellRequest = mongoose.model("SellRequest", sellRequestSchema);

export default SellRequest;