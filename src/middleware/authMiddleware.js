import jwt from 'jsonwebtoken'
import env from '../config/env.js'




const authMiddleWare = (req, res, next) => {
    // get token from headers 
    const authHeaders = req.headers.authorization;
    // BEARER, .... token so thats why we split
    const token = authHeaders && authHeaders.split(" ")[1]

    // check if token does not exists.
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided."
        })
    }

    // verify the token
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.admin = decoded;
        next();
    }

    catch (e) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        })
    }
}

export default authMiddleWare