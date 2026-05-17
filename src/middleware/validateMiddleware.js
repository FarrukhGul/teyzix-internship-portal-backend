const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
        console.log("Full error:", JSON.stringify(result.error, null, 2))
        
        const messages = result.error?.issues?.map(e => e.message)
            || result.error?.errors?.map(e => e.message)
            || ["Validation failed"]

        return res.status(400).json({
            success: false,
            errors: messages
        })
    }

    req.body = result.data
    next()
}

export default validate