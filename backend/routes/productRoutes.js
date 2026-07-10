import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

// Router = ek "mini app" jo sirf products se related
// URLs handle karega
const router = express.Router();

// Jab GET request aaye "/" pe (jo aage "/api/products" banega)
router.get("/", getProducts);

// Jab GET request aaye "/:id" pe (jaise "/api/products/123")
router.get("/:id", getProductById);

// Jab POST request aaye "/" pe (naya product banane ke liye)
router.post("/", createProduct);

//delete krny ka liya
router.delete("/:id", deleteProduct); 



export default router;