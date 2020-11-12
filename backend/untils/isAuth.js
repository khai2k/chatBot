var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(tokken, "JWT_SECRET", (err, decode) => {
                if (err) {
                    return res.send(error).status(400);
                }
            })
        }
        else console.log("no token");
        return next();
    } catch (error) {
        return res.send(error).status(400);
    }
}