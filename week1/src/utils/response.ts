import type { Response } from "express";

export const responseSucces = (
  res: Response,
  data: any,
  message: string = "Succes",
  statusCode: number = 200
) => {
  res.status(statusCode).json({
    succes: true,
    message,
    data,
  });
};

export const responseError = (
  res: Response,
  statusCode: number = 500,
  message: string = "Internal Server Error",
  errors: any = null
) => {
  res.status(statusCode).json({
    succes: false,
    message,
    errors,
  });
};
