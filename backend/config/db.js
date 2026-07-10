import mongoose from "mongoose";

// Ye function MongoDB se connect karta hai
// "async" isliye kyunki connection mein time lagta hai,
// hum result ka "wait" karte hain
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    // process.exit(1) = agar database na jude, to poora
    // server band kar do (bina database ke app chalane
    // ka koi faida nahi)
    process.exit(1);
  }
};

export default connectDB;