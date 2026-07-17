import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dns from "dns";
import authRoutes from "./routes/authRoutes.js";
import sellRoutes from "./routes/sellRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/auth", authRoutes);

//public folder images waly ko public banati hy
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Watch Store API is running...");
});

// Jo bhi URL "/api/products" se shuru ho, use productRoutes
// file handle karegi
app.use("/api/products", productRoutes);

app.use("/api/sell", sellRoutes);

app.use("/api/posts", postRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});