import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true }, // chhota summary
    content: { type: String, required: true }, // poora article
    image: { type: String, required: true },
    author: { type: String, default: "USA Luxury Team" },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;