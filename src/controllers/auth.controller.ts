import { asyncHandler } from "../utils/async.handler.js";
import * as authServices from "../services/auth.services.js";
import type { Request, Response } from "express";
import { successResponse } from "../utils/response.js";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const data = await authServices.register(req.body);
  return successResponse(res, "Register successfully", data, 201);
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const data = await authServices.login(req.body);
  return successResponse(res, "Login successfully", data, 200);
});
