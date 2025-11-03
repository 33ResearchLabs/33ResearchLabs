import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  author:{
    type:String,
    required: true,
  },
  date: {
    type: String,
  },
  readTime: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
