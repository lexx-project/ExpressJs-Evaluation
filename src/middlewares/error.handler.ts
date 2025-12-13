import type { Request, Response, NextFunction } from "express"
import { errorResponse } from "../utils/response.js"

export const errorHandler = (err: any, _req: Request,res: Response, _next: NextFunction) => {
    console.log("ERROR:", err.message)
    const statusCode = err.message.includes('tidak ditemukan') ? 404 : 400
    errorResponse(res, err.message || "Server Error", statusCode)
}