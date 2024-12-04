const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const jwtResponse = jwt.verify(token, process.env.JWT_SECRET);
        if(jwtResponse.adminId){
            req.payload=jwtResponse.adminId
        }else{
            return res.status(401).json("Unauthorized")
        }

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = verifyToken;
