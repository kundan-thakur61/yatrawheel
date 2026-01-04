import mongoose, { Document, Schema, Model } from 'mongoose';
import { IVehicle } from './Vehicle';
import { IUser } from './User';

export interface IBooking extends Document {
  vehicleId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
  ownerId: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  totalKm: number;
  pickupLocation: string;
  dropLocation: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'rejected';
  totalAmount: number;
  advanceAmount: number;
  balanceAmount: number;
  commissionAmount: number;
  paymentStatus: 'pending' | 'paid' | 'partial' | 'failed';
  customerNotes?: string;
  ownerNotes?: string;
  driverDetails?: {
    name: string;
    phone: string;
    licenseNumber: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema<IBooking> = new Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalDays: {
    type: Number,
    required: true,
    min: 1,
  },
  totalKm: {
    type: Number,
    default: 0,
    min: 0,
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true,
  },
  dropLocation: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled', 'rejected'],
    default: 'pending',
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  advanceAmount: {
    type: Number,
    default: 0,
    min: 0,
  },
  balanceAmount: {
    type: Number,
    default: 0,
    min: 0,
  },
  commissionAmount: {
    type: Number,
    default: 0,
    min: 0,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'partial', 'failed'],
    default: 'pending',
  },
  customerNotes: {
    type: String,
    trim: true,
  },
  ownerNotes: {
    type: String,
    trim: true,
  },
  driverDetails: {
    name: String,
    phone: String,
    licenseNumber: String,
  },
}, {
  timestamps: true,
});

const BookingModel: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default BookingModel;