import Blog from "../models/Blog.js";

export const PostNewBlog = async (req, res) => {
  const { title, content } = req.body;
  const { filename } = req.file;
  if (!title || !content || !filename) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const exisitingBlog = await Blog.findOne({ title });
  if (exisitingBlog) {
    return res.status(400).json({ message: "Blog already exists" });
  }
  try {
    const newBlog = new Blog({
      title,
      content,
      image: filename,
    });
    await newBlog.save();
    return res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const getABlog = async (req, res) => {
  const {id} = req.params;
  if(!id){
    return res.status(400).json({message:"Blog id is required"})
  }
  try {
    const blog = await Blog.findOne({_id:id});
    res.status(200).json(blog);
  } catch { 
    res.status(500).json({ message: error.message });
  }
}

export const UpdateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;

  const filename = req.file?.filename; // Safely access filename

  // Validation: At least one field must be provided
  if (
    (!title || !title.trim()) &&
    (!content || !content.trim()) &&
    (!author || !author.trim()) &&
    !filename
  ) {
    return res
      .status(400)
      .json({ message: "At least one field is required to update" });
  }

  try {
    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Build update object dynamically
    const updateData = {};
    if (title && title.trim()) updateData.title = title.trim();
    if (content && content.trim()) updateData.content = content.trim();
    if (author && author.trim()) updateData.author = author.trim();
    if (filename) updateData.image = filename;

    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ message: "Internal server error" });
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
  } catch {
    res.status(500).json({ message: error.message });
  }
};
