import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite = wo tool jo apka React code fast run/build
// karta hai (Create-React-App se zyada fast hai,
// isliye aajkal industry standard yahi hai)
export default defineConfig({
  plugins: [react()],
});
