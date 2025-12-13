import type { Response } from "express"

export const succesResponse = (res: Response, message: string, data: any = null, statusCode = 200 ) => {
    return res.status(statusCode).json({
        succes: true,
        message, 
        data,
    })
}

export const errorResponse = (res: Response, message: string, statusCode = 400, errors: any = null) => {
    return res.status(statusCode).json({
        succes: false, 
        message, 
        errors
    })
}