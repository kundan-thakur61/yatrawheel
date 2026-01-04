import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { dbConnect } from '../../../../lib/dbConnect';
import UserModel from '../../../../models/User';
import { generateToken } from '../../../../lib/auth';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    const { email, phone, password } = body;

    // Validate required fields
    if ((!email && !phone) || !password) {
      return NextResponse.json(
        { success: false, message: 'Email/Phone and password are required' },
        { status: 400 }
      );
    }

    // Find user by email or phone
    const query: any = {};
    if (email) query.email = email;
    if (phone) query.phone = phone;

    const user = await UserModel.findOne(query);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check password
    if (!user.password) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate token
    const token = generateToken(user);

    // Remove password from response
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      isVerified: user.isVerified,
      businessName: user.businessName,
      businessAddress: user.businessAddress,
    };

    return NextResponse.json(
      { success: true, message: 'Login successful', user: userResponse, token },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}