var jwt = require('jsonwebtoken')

module.exports = ({ user, password }) => {
    return jwt.sign({
        user: user,
        password: password
    }, "JWT_SECRET", {
        expiresIn: '48h'
    })
}