import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { dbConnect } from '../../../lib/dbConnect';
import UserModel from '../../../models/User';
import { generateToken } from '../../../lib/auth';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    const { name, email, phone, password, role } = body;

    // Validate required fields
    if (!name || !phone || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, phone and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({
      $or: [{ phone }, { email: email ? email : { $exists: false } }]
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists with this phone or email' },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await UserModel.create({
      name,
      email: email || undefined,
      phone,
      password: hashedPassword,
      role: role || 'customer',
    });

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
    };

    return NextResponse.json(
      { success: true, message: 'User registered successfully', user: userResponse, token },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}