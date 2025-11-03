import Blog from "../models/Blog.js";

export const PostNewBlog = async (req, res) => {
  const {
    title,
    content,
    excerpt,
    author,
    date,
    readTime,
    category,
    icon,
    color,
    image,
  } = req.body;

  if (!title || !content || !excerpt || !author || !category) {
    return res.status(400).json({
      message: "Title, content, excerpt, author, and category are required",
    });
  }

  const existingBlog = await Blog.findOne({ title });
  if (existingBlog) {
    return res.status(400).json({ message: "Blog already exists" });
  }

  try {
    const newBlog = new Blog({
      title,
      content,
      excerpt,
      author,
      date:
        date ||
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      readTime: readTime || "5 min read",
      category,
      icon: icon || "LayersIcon",
      color: color || "from-purple-400 to-purple-600",
      image: image || "", // Now accepts Cloudinary URL
    });
    await newBlog.save();
    return res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetBlog = async (req, res) => {
  console.log("active route");
  try {
    const blogs = await Blog.find().lean().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getABlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Blog id is required" });
  }
  try {
    const blog = await Blog.findOne({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const UpdateBlog = async (req, res) => {
  const id = req.params.id;
  const {
    title,
    content,
    excerpt,
    author,
    date,
    readTime,
    category,
    icon,
    color,
    image,
  } = req.body;

  try {
    const existingBlog = await Blog.findOne({ _id: id });

    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Build update object dynamically - only update provided fields
    const updateData = {};
    if (title !== undefined && title.trim()) updateData.title = title.trim();
    if (content !== undefined && content.trim())
      updateData.content = content.trim();
    if (excerpt !== undefined && excerpt.trim())
      updateData.excerpt = excerpt.trim();
    if (author !== undefined && author.trim())
      updateData.author = author.trim();
    if (date !== undefined) updateData.date = date;
    if (readTime !== undefined) updateData.readTime = readTime;
    if (category !== undefined) updateData.category = category;
    if (icon !== undefined) updateData.icon = icon;
    if (color !== undefined) updateData.color = color;
    if (image !== undefined) updateData.image = image; // Cloudinary URL

    const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });

    res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const DeleteBlog = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Blog id is required" });
  }
  const exisitingBlog = await Blog.findOne({ _id: id });
  if (!exisitingBlog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  try {
    await Blog.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
