const jwt = require("jsonwebtoken");

function verifyToken(request, response, next) {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (error, userId) => {
            if (error) return response.sendStatus(401);
            request.user = userId;
            next();
        });
    } else {
        return response.sendStatus(401);
    }
}

module.exports = { verifyToken };