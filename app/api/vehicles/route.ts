import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import VehicleModel from '../../../models/Vehicle';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    
    // Get query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const type = searchParams.get('type');
    const city = searchParams.get('city');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const minSeats = searchParams.get('minSeats');
    const search = searchParams.get('search');

    // Build query
    const query: any = { status: 'approved', isAvailable: true };
    
    if (type) query.type = type;
    if (city) query['location.city'] = new RegExp(city, 'i');
    if (minPrice) query.dailyRent = { ...query.dailyRent, $gte: parseFloat(minPrice) };
    if (maxPrice) query.dailyRent = { ...query.dailyRent, $lte: parseFloat(maxPrice) };
    if (minSeats) query.seatingCapacity = { $gte: parseInt(minSeats) };
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } },
      ];
    }

    // Calculate skip value
    const skip = (page - 1) * limit;

    // Get vehicles with pagination
    const vehicles = await VehicleModel.find(query)
      .populate('ownerId', 'name businessName phone')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await VehicleModel.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: vehicles,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalVehicles: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    });
  } catch (error: any) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    // In a real app, you'd have authentication middleware here
    // For now, assuming the user is authenticated and we have access to their ID
    
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'brand', 'model', 'type', 'year', 'seatingCapacity', 'fuelType', 'transmission', 'dailyRent', 'perKmRate', 'location', 'documents'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Create new vehicle
    const vehicle = await VehicleModel.create({
      ...body,
      status: 'pending', // Default to pending for admin approval
    });

    return NextResponse.json(
      { success: true, message: 'Vehicle created successfully', vehicle },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}