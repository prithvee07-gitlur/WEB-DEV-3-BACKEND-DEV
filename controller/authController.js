const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

// 2. Register a new user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Please provide name, email and password'
            });
        }
        // check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        // generate token
        const token = generateToken(user);
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// 3. Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check required fields
        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide email and password'
            });
        }
        // check if user exists
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }
        // generate token
        const token = generateToken(user);
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};