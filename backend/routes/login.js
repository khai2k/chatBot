var express = require('express');
var router = express.Router();
var loginDao = require('../dao/login')
var getToken = require("../untils/getToken")

/* GET users listing. */
router.post('/', async (req, res, next) => {
    try {
        const { user, password } = req.body;
        // let isSignIn = await loginDao.signIn({ user, password });
        // if (isSignIn) {
        //     res.send({
        //         user: user,
        //         token: getToken({ user, password })
        //     })
        // }
        console.log(user, "ss", password)
        if (user == "admin" && password == "admin")
            res.send({ user: user }).status(200)
        else res.send({ message: 'User Not Found' }).status(404);
        return;
    }
    catch (error) {
        return res.send("loi ne").status(400)
    }
});

module.exports = router;
