import { type Request, type Response, type NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.startTime = Date.now();

  const requestId = Math.random().toString(36).substring(7);
  res.setHeader("X-Request-Id", requestId);
  console.log(`[${requestId}] ${req.method} ${req.originalUrl} - Start`);

  res.on("finish", () => {
    const duration = Date.now() - (req.startTime || 0);
    console.log(
      `[${requestId}] ${req.method} ${req.url} - Done in ${duration}ms`
    );
  });
  next();
};
