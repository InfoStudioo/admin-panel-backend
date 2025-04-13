const { where } = require('sequelize');
const sequelize = require('../config/db');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const generateToken = require('../utils/tokenService');




const isUserUnique = async (username, email) => {
    
  const usernameExists = await User.findOne({where: {username}});

  const emailExists = await User.findOne({where: {email}});

  return {
   
      unique: !usernameExists && !emailExists,
      usernameExists: !!usernameExists,
      emailExists: !!emailExists    

};

};


exports.createUser = async (req, res) => {
  try {
      const { username, email, password, role } = req.body;

    
      const uniquenessCheck = await isUserUnique(username, email);
      
      if (!uniquenessCheck.unique) {
        let message = 'User creation failed: ';
        if (uniquenessCheck.usernameExists && uniquenessCheck.emailExists) {
            message += 'Username and Email already exist';
        } else if (uniquenessCheck.usernameExists) {
            message += 'Username already exists';
        } else if (uniquenessCheck.emailExists) {
            message += 'Email already exists';
        }
        return res.status(400).json({ message });
    }

     // Hash the password before storing it
     const saltRounds = 10;
     const hashedPassword = await bcrypt.hash(password, saltRounds);


    

      const user = await User.create({ username, email, password: hashedPassword, role });

      res.status(201).json({ message: 'User Created', user });

  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};




exports.loginUser = async (req, res) => {

    try{

        const { identifier, password } = req.body; //Identifier can be either username or email
        
        // Find user by username or email
        const user = await User.findOne({
            where: {
                [Op.or]: [{username: identifier}, {email: identifier}]
            }
        });

        if (!user) {
            return res.status(400).json({message: 'Invalid username or email'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid Password'});
        }

        const tokenExpiry = '5m';
        const token = generateToken(user, tokenExpiry);

       
        res.status(200).json({message: 'Login Successful', token, user});
    }
    catch(error){
       res.status(500).json({message: error.message});
    }
};



exports.landToDashboard = async (req, res) => {
    
    try {
        let token = req.headers.authorization; // Assuming token is passed in the Authorization header

        
        if (!token) {
            return res.status(401).json({ message: 'Token is required' });
        }

        // ✅ Remove "Bearer " prefix before verifying
        token = token.replace("Bearer ", "");

       
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token has expired. Please log in again." });
            }
            return res.status(403).json({ message: "Invalid token." });
        }
        

        if (!decoded || decoded.id !== req.body.userId) {
            return res.status(403).json({ message: 'Invalid token for this user' });
        }

        const user = await User.findByPk(decoded.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a new token if needed
        const tokenExpiry = '1h';
        const tokennew = generateToken(user, tokenExpiry);

        //console.log("token fromLandToDashboard " + tokennew);

        res.status(200).json({
            message: 'Welcome to the dashboard',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            tokennew
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};