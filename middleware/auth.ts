import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../lib/auth';
import UserModel from '../models/User';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: any;
}

export const authenticate = async (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  requiredRole?: string | string[]
): Promise<boolean> => {
  try {
    // Check for token in headers
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ success: false, message: 'Access token is required' });
      return false;
    }

    // Verify token
    const decoded = verifyToken(token);
    const user = await UserModel.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401).json({ success: false, message: 'User not found' });
      return false;
    }

    // Check role if required
    if (requiredRole) {
      const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      if (!roles.includes(user.role)) {
        res.status(403).json({ success: false, message: 'Access denied. Insufficient permissions.' });
        return false;
      }
    }

    req.user = user;
    return true;
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
    return false;
  }
};