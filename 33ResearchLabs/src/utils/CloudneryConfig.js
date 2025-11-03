const cloudName =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your_cloud_name";

export const CloudinaryConfig = {
  cloudName,
  uploadPreset:
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "your_upload_preset",
  apiBaseUrl: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
};

export const CloudinaryFolder = {
  RESEARCHLAB: "33researchlab/blogs",
};
