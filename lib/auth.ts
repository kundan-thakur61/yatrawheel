import * as jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

export const generateToken = (user: IUser): string => {
  const payload = {
    id: user._id,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };

  // Using a simple approach without complex options
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET || 'fallback_jwt_secret'
  );

  return token;
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'fallback_jwt_secret');
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

