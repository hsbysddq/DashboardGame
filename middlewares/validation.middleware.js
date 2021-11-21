exports.validate = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
    } catch (error) {
        next({
            message: 'bad request',
            code: 400,
            error: error.details
        })
    }
}
