const router = require('express').Router()

const {viewRegister, register, login} = require('../controllers/users.controller')

const { validate } = require('../middlewares/validation.middleware')
const { registerSchema } = require('../schemas/register.schema')

router.get('/register', viewRegister)
router.post('/register', validate(registerSchema), register)

router.post('/login', login)

module.exports = router