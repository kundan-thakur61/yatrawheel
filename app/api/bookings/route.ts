import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import BookingModel from '../../../models/Booking';
import VehicleModel from '../../../models/Vehicle';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    
    // Get query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const customerId = searchParams.get('customerId');
    const vehicleId = searchParams.get('vehicleId');

    // Build query
    const query: any = {};
    
    if (status) query.status = status;
    if (customerId) query.customerId = customerId;
    if (vehicleId) query.vehicleId = vehicleId;

    // Calculate skip value
    const skip = (page - 1) * limit;

    // Get bookings with pagination
    const bookings = await BookingModel.find(query)
      .populate('vehicleId', 'name brand model images')
      .populate('customerId', 'name phone email')
      .populate('ownerId', 'name businessName phone')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await BookingModel.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: bookings,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBookings: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['vehicleId', 'customerId', 'ownerId', 'startDate', 'endDate', 'pickupLocation', 'dropLocation', 'totalAmount'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Check if vehicle is available for the given dates
    const existingBooking = await BookingModel.findOne({
      vehicleId: body.vehicleId,
      status: { $in: ['pending', 'confirmed', 'in_progress'] },
      $or: [
        {
          startDate: { $lte: new Date(body.endDate) },
          endDate: { $gte: new Date(body.startDate) }
        }
      ]
    });

    if (existingBooking) {
      return NextResponse.json(
        { success: false, message: 'Vehicle is not available for the selected dates' },
        { status: 400 }
      );
    }

    // Calculate total days
    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 to include both start and end dates

    // Get vehicle to calculate commission
    const vehicle = await VehicleModel.findById(body.vehicleId);
    if (!vehicle) {
      return NextResponse.json(
        { success: false, message: 'Vehicle not found' },
        { status: 404 }
      );
    }

    // Calculate commission
    const commissionAmount = (body.totalAmount * vehicle.commissionPercentage) / 100;

    // Create new booking
    const booking = await BookingModel.create({
      ...body,
      totalDays,
      commissionAmount,
    });

    // Update vehicle availability status
    if (body.status === 'confirmed') {
      await VehicleModel.findByIdAndUpdate(body.vehicleId, { isAvailable: false });
    }

    return NextResponse.json(
      { success: true, message: 'Booking created successfully', booking },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}