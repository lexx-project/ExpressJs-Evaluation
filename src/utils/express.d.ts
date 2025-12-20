import { Request } from "express";

export interface UserPayload {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      startTime?: number;
      user?: UserPayload;
    }
  }
}
