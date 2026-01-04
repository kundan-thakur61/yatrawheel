import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ICommission extends Document {
  vehicleType: 'car' | 'tempo_traveller' | 'bus' | 'bike' | 'truck' | 'other';
  commissionPercentage: number;
  isActive: boolean;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CommissionSchema: Schema<ICommission> = new Schema({
  vehicleType: {
    type: String,
    enum: ['car', 'tempo_traveller', 'bus', 'bike', 'truck', 'other'],
    required: true,
  },
  commissionPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const CommissionModel: Model<ICommission> = mongoose.models.Commission || mongoose.model<ICommission>('Commission', CommissionSchema);

export default CommissionModel;