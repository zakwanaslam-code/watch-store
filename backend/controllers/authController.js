import jwt from "jsonwebtoken";

export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  // Check karo email/password .env mein diye gaye se match karte hain
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Match hua - token banao (7 din ke liye valid)
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ token });
  } else {
    // Match nahi hua
    res.status(401).json({ message: "Invalid email or password" });
  }
};