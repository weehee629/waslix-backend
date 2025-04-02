var { expressjwt: jwt } = require("express-jwt");

function authJwt() {
    const secret = "verma9378";
    return jwt({
        secret: secret,
        algorithms: ["HS256"],
    })
}



module.exports = authJwt