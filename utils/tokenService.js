const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const generateToken = (user, expiresIn = '1h') => {
    return jwt.sign(
        { 
            id: user.id, 
            username: user.username, 
            email: user.email, 
            role: user.role 
        },
        process.env.JWT_SECRET,
        { expiresIn } // Use the passed expiration time
    );
};

module.exports = generateToken;