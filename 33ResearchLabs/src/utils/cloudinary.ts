// Cloudinary upload utility
export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // Validate environment variables
  if (!cloudName) {
    throw new Error('VITE_CLOUDINARY_CLOUD_NAME is not set in environment variables');
  }

  if (!uploadPreset) {
    throw new Error('VITE_CLOUDINARY_UPLOAD_PRESET is not set in environment variables');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Cloudinary error:', data);
      throw new Error(data.error?.message || 'Failed to upload image');
    }

    return data.secure_url; // Returns the Cloudinary URL
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};
