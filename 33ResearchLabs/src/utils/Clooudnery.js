import { CloudinaryConfig } from "./CloudneryConfig";

export const uploadImageToCloudinary = async (imageFile, folder) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", CloudinaryConfig.uploadPreset);
  formData.append("folder", folder);

  // Check if file is an image or a document
  const isImage = imageFile.type.startsWith('image/');
  const apiUrl = isImage
    ? CloudinaryConfig.apiBaseUrl
    : CloudinaryConfig.apiBaseUrl.replace('/image/', '/raw/');

  console.log(`Uploading ${imageFile.name} (${imageFile.type}) to ${apiUrl}`);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    console.log("Cloudinary response:", data);

    if (response.ok) {
      return data.secure_url; // Return the uploaded file URL
    }

    throw new Error(data.error?.message || data.message || "Cloudinary upload failed");
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    console.error("File details:", {
      name: imageFile.name,
      type: imageFile.type,
      size: imageFile.size
    });
    throw error;
  }
};
