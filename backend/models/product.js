import mongoose from "mongoose";

// SCHEMA = database mein har "product" ka structure/blueprint
// Batata hai kaunse fields honge, kis type ke, kaunse zaroori hain
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // ye field bhare bina save nahi hoga
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number, // optional - sirf discount wali watches ke liye
    },
    discount: {
      type: Number, // optional - percentage
    },
    image: {
      type: String, // image ka URL/path store hoga
      required: true,
    },
    description: {
      type: String,
      default: "Every timepiece is thoroughly verified by experts and comes fully authenticated and insured.",
    },
  },
  {
    // timestamps = automatically "createdAt" aur "updatedAt"
    // fields add ho jayenge har product mein
    timestamps: true,
  }
);

// Model banaya - "Product" naam se. Mongoose isko
// database mein "products" collection ki tarah save karega
// (khud-ba-khud lowercase + plural kar deta hai)
const Product = mongoose.model("Product", productSchema);

export default Product;