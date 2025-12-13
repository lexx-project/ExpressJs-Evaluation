import type { Request, Response, NextFunction } from "express"
import { validationResult, type ValidationChain, body, param } from "express-validator"
import { errorResponse } from "../utils/response.js"

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)))
        const error = validationResult(req)
        if(error.isEmpty()) return next()
        return errorResponse(res, "Validasi Gagal", 400, error.array())
    }
}

export const createBookValidator = [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('publishedYear').isInt().withMessage('Published Year must be an integer'),
    body('stock').isInt().withMessage('Stock must be an integer'),
    body('isbn').notEmpty().withMessage('ISBN is required'),
    body('categoryId').isUUID().withMessage('Category ID must be a valid UUID').notEmpty().withMessage('Category ID is required'),
]

export const getBookValidation = [
    param("id").isUUID().withMessage("Invalid ID format"),
    param("id").notEmpty().withMessage("ID is required")
]

export const deleteBookValidation = [
    param("id").isUUID().withMessage("Invalid ID format"),
    param("id").notEmpty().withMessage("ID is required")
]

export const updateBookValidation = [
    param("id").isUUID().withMessage("Invalid ID format"),
    param("id").notEmpty().withMessage("ID is required")
]

