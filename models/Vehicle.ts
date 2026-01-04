import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IVehicle {
  ownerId: mongoose.Types.ObjectId;
  name: string;
  brand: string;
  model: string;
  type: 'car' | 'tempo_traveller' | 'bus' | 'bike' | 'truck' | 'other';
  year: number;
  seatingCapacity: number;
  fuelType: 'petrol' | 'diesel' | 'cng' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  dailyRent: number;
  perKmRate: number;
  location: {
    city: string;
    state: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: string[];
  images: string[];
  status: 'pending' | 'approved' | 'rejected' | 'disabled';
  isAvailable: boolean;
  documents: {
    rc: string;
    insurance: string;
    pollutionCertificate: string;
    permit?: string;
    fitnessCertificate?: string;
  };
  description?: string;
  rating?: number;
  totalReviews?: number;
  commissionPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}

const VehicleSchema: Schema<IVehicle> = new Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['car', 'tempo_traveller', 'bus', 'bike', 'truck', 'other'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1990,
    max: new Date().getFullYear() + 1,
  },
  seatingCapacity: {
    type: Number,
    required: true,
    min: 1,
  },
  fuelType: {
    type: String,
    enum: ['petrol', 'diesel', 'cng', 'electric', 'hybrid'],
    required: true,
  },
  transmission: {
    type: String,
    enum: ['manual', 'automatic'],
    required: true,
  },
  dailyRent: {
    type: Number,
    required: true,
    min: 0,
  },
  perKmRate: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  features: [{
    type: String,
    trim: true,
  }],
  images: [{
    type: String,
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'disabled'],
    default: 'pending',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  documents: {
    rc: {
      type: String,
      required: true,
    },
    insurance: {
      type: String,
      required: true,
    },
    pollutionCertificate: {
      type: String,
      required: true,
    },
    permit: String,
    fitnessCertificate: String,
  },
  description: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  commissionPercentage: {
    type: Number,
    default: 10, // Default 10% commission
    min: 0,
    max: 100,
  },
}, {
  timestamps: true,
});

const VehicleModel: Model<IVehicle> = mongoose.models.Vehicle || mongoose.model<IVehicle>('Vehicle', VehicleSchema);

export default VehicleModel;