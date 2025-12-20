import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";
import type { UserPayload } from "../utils/express.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return errorResponse(res, "Unauthorized: No token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return errorResponse(res, "Unauthorized: Invalid token format", 401);
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return errorResponse(res, "Server configuration error", 500);
    }

    const decoded = jwt.verify(token, secret) as unknown as UserPayload;

    req.user = decoded;

    next();
  } catch (error) {
    return errorResponse(res, "Unauthorized: Invalid token", 401);
  }
};

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return errorResponse(res, "Unauthorized", 401);
  }

  if (req.user.role !== "ADMIN") {
    return errorResponse(res, "Forbidden: Admin access required", 403);
  }

  next();
};
