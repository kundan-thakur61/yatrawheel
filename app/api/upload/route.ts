import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import { uploadImage, uploadDocument } from '../../../lib/cloudinary';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const uploadType = formData.get('type') as string; // 'image' or 'document'
    const folder = formData.get('folder') as string; // optional folder override

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert File to buffer for upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a temporary file path for upload
    const tempPath = `temp/${Date.now()}_${file.name}`;
    
    // Write the buffer to a temporary location (in a real app, you might use a temp directory)
    // For this example, we'll use a data URL approach
    const dataUrl = `data:${file.type};base64,${buffer.toString('base64')}`;

    let resultUrl: string;
    
    if (uploadType === 'document') {
      resultUrl = await uploadDocument(dataUrl, folder || 'yatrawheels/documents');
    } else {
      // Default to image upload
      resultUrl = await uploadImage(dataUrl);
    }

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      url: resultUrl,
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed', error: error.message },
      { status: 500 }
    );
  }
}