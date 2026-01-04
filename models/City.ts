import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ICity extends Document {
  name: string;
  state: string;
  stateCode: string;
  country: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  vehicleCount: number;
  isPopular: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CitySchema: Schema<ICity> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  stateCode: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  country: {
    type: String,
    default: 'India',
    trim: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  vehicleCount: {
    type: Number,
    default: 0,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const CityModel: Model<ICity> = mongoose.models.City || mongoose.model<ICity>('City', CitySchema);

export default CityModel;