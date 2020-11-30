const session = require('express-session');

require("dotenv").config();

const server = require("./api/server.js");

server.use(session({
    resave: false, // Avoid creating sessions that have not changed
    saveUninitialized: false, // GDPR laws against setting cookies automatically
    secret: 'Keep it secret, keep it safe',
}))

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
