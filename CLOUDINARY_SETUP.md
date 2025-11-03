# Cloudinary Setup Guide

## Overview
The blog creation form now uploads images directly to Cloudinary from the frontend, which provides better performance and scalability.

## Setup Steps

### 1. Create a Cloudinary Account
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Once logged in, go to your Dashboard

### 2. Get Your Credentials
From your Cloudinary Dashboard, you'll need:
- **Cloud Name** (e.g., `your-cloud-name`)
- **Upload Preset** (you need to create this)

### 3. Create an Upload Preset
1. In Cloudinary Dashboard, go to **Settings** → **Upload**
2. Scroll down to **Upload presets**
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: Choose a name (e.g., `blog_images`)
   - **Signing Mode**: Select **Unsigned** (for frontend uploads)
   - **Folder**: `blog-images` (optional, organizes your images)
   - **Transformations**: Add if you want automatic image optimization
5. Click **Save**

### 4. Add Environment Variables
Add these to your frontend `.env` file:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset_name
```

### 5. Test the Upload
1. Start your frontend: `npm run dev`
2. Go to the admin blog creation page
3. Select an image file
4. You should see:
   - "Uploading image..." message
   - "✓ Image uploaded successfully!" with preview
   - The image URL will be saved to the database

## Features
- ✅ Direct frontend upload to Cloudinary
- ✅ Real-time upload progress
- ✅ Image preview after upload
- ✅ Automatic image optimization
- ✅ 5MB file size limit
- ✅ Supports: JPG, PNG, GIF, WEBP

## Image Storage
Images are stored in your Cloudinary account under the `blog-images` folder and can be managed from the Cloudinary dashboard.

## Troubleshooting

### "Failed to upload image"
- Check your Cloudinary credentials are correct
- Make sure the upload preset is set to **Unsigned**
- Check browser console for detailed errors

### Image not showing
- Verify the imageUrl is being saved to the database
- Check the image URL is publicly accessible
- Make sure CORS is enabled in Cloudinary (it's enabled by default)
