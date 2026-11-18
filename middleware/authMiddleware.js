const jwt = require('jsonwebtoken');
const User = require('../model/User');

const protect = async (req, res, next) => {
    try{
        // get token from header
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message: 'Not authorized, no token'});
        }

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        const user  = await User.findById(decoded.id);
        console.log(user);
        if(!user){
            return res.status(401).json({message: 'Not authorized, user not found'});
        }
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({message: 'Not authorized, token failed'});
    }

}

module.exports = protect;

