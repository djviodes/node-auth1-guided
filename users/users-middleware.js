const bcrypt = require('bcryptjs');
const Users = require('./users-model');

function restrict() {
    // Create a middleware function that restricts routes to authorized users only.
    // It should get the username and password from the request headers.
    return async (req, res, next) => {
        try {
            // const { username, password } = req.headers
            // // Make sure the values are not empty
            // if (!username || !password) {
            //     return res.status(401).json({
            //         message: 'Invalid Credentials',
            //     })
            // }

            // const user = await usersModel.findBy({ username }).first()
            // if (!user) {
            //     return res.status(401).json({
            //         message: 'Invalid Credentials',
            //     })
            // }

            // const passwordValid = await bcrypt.compare(password, user.password)
            // if (!passwordValid) {
            //     return res.status(401).json({
            //         message: 'Invalid Credentials',
            //     })
            // }

            if (!req.session || !req.session.user) {
                return res.status(401).json({
                    message: 'Invalid Credentials',
                })
            }

            // Everything validated, we're good to go
            next()

            // Check the username and password before moving on
        } catch (err) {
            next(err)
        }
    }
}

module.exports = {
    restrict,
}