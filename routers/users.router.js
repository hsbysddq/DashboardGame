const router = require('express').Router()

const {viewRegister, register, login, viewLogin, whoiami} = require('../controllers/users.controller')
const passport = require('../utils/passport')

const { validate } = require('../middlewares/validation.middleware')
const { registerSchema } = require('../schemas/register.schema')
const { verify } = require('../middlewares/verify.middleware')

router.get('/register', viewRegister)
router.post('/register', validate(registerSchema), register)

router.post('/login/web', login)
router.get('/login', viewLogin)

module.exports = router