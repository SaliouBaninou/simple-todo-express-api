import { checkSchema, matchedData, validationResult } from "express-validator"

export const validateSchema = (schema) => [
    checkSchema(schema),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        req.validatedData = matchedData(req)
        next()
    }
]