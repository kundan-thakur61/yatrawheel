import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload image to Cloudinary
export const uploadImage = async (file: string | File): Promise<string> => {
  try {
    // If it's a File object (client-side), we need to upload differently
    if (typeof File !== 'undefined' && file instanceof File) {
      // For client-side uploads, we would typically use unsigned uploads
      // This requires a direct upload to Cloudinary from the browser
      throw new Error('Client-side file upload not implemented. Use signed upload from backend.');
    } else {
      // If it's a URL or path (server-side)
      const result = await cloudinary.uploader.upload(file as string, {
        folder: 'yatrawheels/vehicles',
        resource_type: 'image',
        use_filename: true,
        unique_filename: true,
        overwrite: false,
      });
      return result.secure_url;
    }
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};

// Upload multiple images
export const uploadMultipleImages = async (files: (string | File)[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadImage(file));
  return Promise.all(uploadPromises);
};

// Upload document to Cloudinary
export const uploadDocument = async (file: string | File, folder: string = 'yatrawheels/documents'): Promise<string> => {
  try {
    if (typeof File !== 'undefined' && file instanceof File) {
      throw new Error('Client-side file upload not implemented. Use signed upload from backend.');
    } else {
      const result = await cloudinary.uploader.upload(file as string, {
        folder: folder,
        resource_type: 'auto', // Cloudinary will detect the file type
        use_filename: true,
        unique_filename: true,
        overwrite: false,
      });
      return result.secure_url;
    }
  } catch (error) {
    console.error('Error uploading document to Cloudinary:', error);
    throw new Error('Failed to upload document to Cloudinary');
  }
};

// Delete file from Cloudinary
export const deleteFile = async (publicId: string): Promise<void> => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting file from Cloudinary:', error);
    throw new Error('Failed to delete file from Cloudinary');
  }
};

export default cloudinary;