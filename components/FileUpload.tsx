'use client';

import { useState, useRef, ChangeEvent } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File, type: string) => void;
  allowedTypes?: string[];
  maxSize?: number; // in MB
  label?: string;
  id?: string;
  type?: string;
  folder?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'image/webp'],
  maxSize = 5, // 5MB default
  label = 'Choose File',
  id = 'file-upload',
  type = 'image',
  folder
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (!allowedTypes.includes(file.type)) {
        setError(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`);
        return;
      }
      
      // Validate file size (maxSize in MB)
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > maxSize) {
        setError(`File size exceeds ${maxSize}MB limit`);
        return;
      }
      
      setSelectedFile(file);
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null); // No preview for non-image files
      }
      
      // Call the parent's upload handler
      onFileUpload(file, type);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-4">
        <input
          type="file"
          id={id}
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept={allowedTypes.join(',')}
        />
        
        <button
          type="button"
          onClick={handleUploadClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {label}
        </button>
        
        {selectedFile && (
          <button
            type="button"
            onClick={removeFile}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Remove
          </button>
        )}
      </div>
      
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      {previewUrl && (
        <div className="mt-2">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-h-40 max-w-full object-contain border border-gray-200 rounded-md"
          />
        </div>
      )}
      
      {selectedFile && !previewUrl && (
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
        </div>
      )}
      
      {uploading && (
        <div className="mt-2 flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
          <span className="text-sm text-gray-600">Uploading...</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;