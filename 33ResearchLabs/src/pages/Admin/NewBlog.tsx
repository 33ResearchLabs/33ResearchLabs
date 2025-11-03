import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { uploadImageToCloudinary } from "@/utils/cloudinary";
import { toast } from "sonner";

export const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [category, setCategory] = useState("Blockchain");
  const [icon, setIcon] = useState("LayersIcon");
  const [color, setColor] = useState("from-purple-400 to-purple-600");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  //   Backend Url
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);

    try {
      const url = await uploadImageToCloudinary(file);
      setImageUrl(url);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image");
      console.error("Upload error:", error);
    } finally {
      setUploadingImage(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !excerpt.trim() || !author.trim() || !category.trim()) {
      setMessage("Title, content, excerpt, author, and category are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const blogData = {
        title,
        content,
        excerpt,
        author,
        date: date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
        readTime: readTime || "5 min read",
        category,
        icon,
        color,
        image: imageUrl, // Send the Cloudinary URL
      };

      const res = await axios.post(
        `${BackendUrl}/api/admin/dashboard/blog`,
        blogData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        setExcerpt("");
        setAuthor("");
        setDate("");
        setReadTime("");
        setCategory("Blockchain");
        setIcon("LayersIcon");
        setColor("from-purple-400 to-purple-600");
        setImageUrl("");
        navigate("/admin/blog");
      } else {
        setMessage("Failed to create blog.");
      }
    } catch (err) {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-[#1e293b] border border-[#334155]">
          <CardHeader>
            <h1 className="text-2xl font-bold text-white">Create New Blog</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Excerpt *</label>
                <textarea
                  value={excerpt}
                  placeholder="Enter a brief excerpt (summary)"
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Content *</label>
                <textarea
                  value={content}
                  placeholder="Enter Full Content with markdown formatting:&#10;&#10;Use ## for headings (e.g., ## Deep Dive Analysis)&#10;Use * for bullet points&#10;Use **text** for bold text&#10;&#10;Example:&#10;## Section Title&#10;&#10;Your paragraph text here...&#10;&#10;* **Bold Point**: Description&#10;* Another point"
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">
                  💡 Tip: Use <code className="bg-[#334155] px-1 rounded">## Heading</code> for sections,
                  <code className="bg-[#334155] px-1 rounded ml-1">* Point</code> for bullets,
                  <code className="bg-[#334155] px-1 rounded ml-1">**bold**</code> for emphasis
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Author *</label>
                  <input
                    type="text"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g., November 3, 2025 (auto-generated if empty)"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Read Time</label>
                  <input
                    type="text"
                    placeholder="e.g., 5 min read (default: 5 min read)"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  >
                    <option value="Blockchain">Blockchain</option>
                    <option value="AI">AI</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Icon</label>
                  <select
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="LayersIcon">Layers (Blockchain)</option>
                    <option value="Brain">Brain (AI)</option>
                    <option value="ShieldIcon">Shield (Security)</option>
                    <option value="TrendingUp">Trending Up (Business)</option>
                    <option value="Code">Code</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Color Gradient</label>
                  <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="from-purple-400 to-purple-600">Purple (Blockchain)</option>
                    <option value="from-electric-400 to-electric-600">Electric Blue (AI)</option>
                    <option value="from-red-400 to-red-600">Red (Security)</option>
                    <option value="from-green-400 to-green-600">Green (Business)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  name="image"
                  id="file"
                  accept="image/*"
                  className="w-full p-2 rounded bg-[#0f172a] border border-[#334155] text-white"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                />
                {uploadingImage && (
                  <p className="text-sm text-blue-400 mt-2">Uploading image...</p>
                )}
                {imageUrl && (
                  <div className="mt-4">
                    <p className="text-sm text-green-400 mb-2">✓ Image uploaded successfully!</p>
                    <img
                      src={imageUrl}
                      alt="Uploaded preview"
                      className="w-full max-w-md h-48 object-cover rounded border border-[#334155]"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="bg-blue-500 p-2 hover:bg-blue-600 text-white flex-1"
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 p-2 hover:bg-orange-600 text-white flex-1"
                  disabled={loading}
                >
                  {loading ? "Publishing..." : "Publish Blog"}
                </button>
              </div>
              {message && (
                <p className="text-sm mt-2 text-center text-orange-400">
                  {message}
                </p>
              )}
            </form>

            {/* Preview Section */}
            {showPreview && (
              <div className="mt-8 border-t border-[#334155] pt-8">
                <h2 className="text-xl font-bold mb-4 text-white">Preview</h2>
                <div className="bg-[#0f172a] p-6 rounded border border-[#334155]">
                  {/* Post Card Preview */}
                  <div className={`h-24 bg-gradient-to-r ${color} flex items-center justify-between px-6 rounded-t mb-4`}>
                    <div className="text-white font-bold">{icon}</div>
                    <div className="text-white/70 text-xs font-mono">
                      {category.toUpperCase()}
                    </div>
                  </div>

                  {/* Featured Image */}
                  {imageUrl && (
                    <div className="mb-4">
                      <img
                        src={imageUrl}
                        alt="Blog featured"
                        className="w-full h-64 object-cover rounded"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded text-xs font-medium mb-2 ${
                        category === 'AI' ? 'bg-electric-100 text-[#1DA1F2]' :
                        category === 'Blockchain' ? 'bg-purple-100 text-purple-800' :
                        category === 'Cybersecurity' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{title || "Blog Title"}</h3>
                      <p className="text-gray-300 text-sm mb-4">{excerpt || "Blog excerpt will appear here..."}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                          {author.split(" ").map(n => n[0]).join("") || "AA"}
                        </div>
                        <span>{author || "Author Name"}</span>
                      </div>
                      <div className="flex gap-4">
                        <span>{date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <span>{readTime || "5 min read"}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#334155]">
                      <h4 className="text-sm font-semibold text-white mb-2">Content Preview:</h4>
                      <div className="text-gray-300 text-sm max-h-96 overflow-y-auto prose prose-invert prose-sm max-w-none">
                        {content ? (
                          content.split('\n\n').map((paragraph, index) => {
                            const lines = paragraph.split('\n');
                            const elements: React.ReactElement[] = [];

                            let i = 0;
                            while (i < lines.length) {
                              const line = lines[i];

                              // Handle headings
                              if (line.startsWith('## ')) {
                                elements.push(
                                  <h2 key={`${index}-h2-${i}`} className="text-lg font-bold text-white mt-6 mb-3">
                                    {line.replace('## ', '').trim()}
                                  </h2>
                                );
                                i++;
                              }
                              // Handle bullet points (collect consecutive bullets)
                              else if (line.startsWith('• ') || line.startsWith('* ')) {
                                const bulletPoints: string[] = [];
                                while (i < lines.length && (lines[i].startsWith('• ') || lines[i].startsWith('* '))) {
                                  bulletPoints.push(lines[i]);
                                  i++;
                                }
                                elements.push(
                                  <ul key={`${index}-ul-${i}`} className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                                    {bulletPoints.map((point, j) => {
                                      const cleanedPoint = point.replace(/^[•*] /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
                                      return (
                                        <li key={j} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: cleanedPoint }} />
                                      );
                                    })}
                                  </ul>
                                );
                              }
                              // Regular text
                              else if (line.trim()) {
                                const cleanedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
                                elements.push(
                                  <p key={`${index}-p-${i}`} className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: cleanedLine }} />
                                );
                                i++;
                              } else {
                                i++;
                              }
                            }

                            return <div key={index}>{elements}</div>;
                          })
                        ) : (
                          <p className="text-gray-500">Content will appear here...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
