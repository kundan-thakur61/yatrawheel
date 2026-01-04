import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/dbConnect';
import VehicleModel from '../../../../models/Vehicle';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect();

  try {
    const { id } = await params;

    // Validate ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, message: 'Invalid vehicle ID' },
        { status: 400 }
      );
    }

    // Find vehicle by ID
    const vehicle = await VehicleModel.findById(id)
      .populate('ownerId', 'name businessName phone profilePicture')
      .lean(); // Use lean() for better performance

    if (!vehicle) {
      return NextResponse.json(
        { success: false, message: 'Vehicle not found' },
        { status: 404 }
      );
    }

    // Only return approved vehicles to public users
    if (vehicle.status !== 'approved') {
      return NextResponse.json(
        { success: false, message: 'Vehicle not available' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: vehicle,
    });
  } catch (error: any) {
    console.error('Error fetching vehicle:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}

// PUT route to update vehicle (for owners/admins)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect();

  try {
    const { id } = await params;
    const body = await request.json();

    // Validate ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, message: 'Invalid vehicle ID' },
        { status: 400 }
      );
    }

    // Find vehicle by ID
    const vehicle = await VehicleModel.findById(id);

    if (!vehicle) {
      return NextResponse.json(
        { success: false, message: 'Vehicle not found' },
        { status: 404 }
      );
    }

    // Update vehicle with new data
    Object.assign(vehicle, body);
    
    // If the status is changed, it might be an admin action
    // For now, we'll keep the status as is unless explicitly provided
    await vehicle.save();

    return NextResponse.json({
      success: true,
      message: 'Vehicle updated successfully',
      data: vehicle,
    });
  } catch (error: any) {
    console.error('Error updating vehicle:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}

// DELETE route to delete vehicle (for owners/admins)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await dbConnect();

  try {
    const { id } = await params;

    // Validate ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, message: 'Invalid vehicle ID' },
        { status: 400 }
      );
    }

    // Find and delete vehicle by ID
    const vehicle = await VehicleModel.findByIdAndDelete(id);

    if (!vehicle) {
      return NextResponse.json(
        { success: false, message: 'Vehicle not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Vehicle deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting vehicle:', error);
    return NextResponse.json(
      { success: false, message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
}