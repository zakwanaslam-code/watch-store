import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import dns from "dns";

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);
console.log("MONGO_URI is:", process.env.MONGO_URI);


// Wahi 6 watches ka data jo frontend mein tha
const products = [
  {
    name: "Rolex Daytona",
    price: 7950,
    image: "https://placehold.co/400x400?text=Rolex+Daytona",
  },
  {
    name: "Patek Philippe Nautilus",
    price: 12500,
    image: "https://placehold.co/400x400?text=Patek+Nautilus",
  },
  {
    name: "Audemars Piguet Royal Oak",
    price: 9800,
    image: "https://placehold.co/400x400?text=Royal+Oak",
  },
  {
    name: "Omega Seamaster",
    price: 6200,
    image: "https://placehold.co/400x400?text=Omega+Seamaster",
  },
  {
    name: "Cartier Santos",
    price: 8400,
    image: "https://placehold.co/400x400?text=Cartier+Santos",
  },
  {
    name: "IWC Portugieser",
    price: 11200,
    oldPrice: 13200,
    discount: 15,
    image: "https://placehold.co/400x400?text=IWC+Portugieser",
  },
];

// Ye function database mein data daalega
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding...");

    // Pehle purana data saaf karo (taake duplicate na banein
    // agar script dubara chalayi)
    await Product.deleteMany();
    console.log("Old products removed");

    // Naya data insert karo
    await Product.insertMany(products);
    console.log("6 products added successfully!");

    // Kaam khatam, connection band karo
    process.exit();
  } catch (error) {
    console.log("Error seeding data:", error.message);
    process.exit(1);
  }
};

seedDatabase();