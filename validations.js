const {body} = require ('express-validator')

module.exports = {
// Form field email and password validations
    loginForm : [
        body ('email').isEmail().withMessage ('Ingresa un email valido'),
        body ('password').notEmpty().withMessage ('Ingresa una contraseña')
    ]

}