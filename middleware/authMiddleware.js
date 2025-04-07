const jwt = require('jsonwebtoken');
require('dotenv').config();


const authenticateUser = (req,res, next) =>{

    const token = req.header('Authorization');

  
   
    if (!token) {
        return res.status(401).json({ error: 'Access denied, token missing' });
      }

      try {
        // Verify and decode the token
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);

        // Determine userId source based on request method
        const userId = req.method === 'GET' ? parseInt(req.query.userId, 10) : parseInt(req.body.userId, 10);
    
   

    if (!Number.isInteger(decoded.id) || !Number.isInteger(userId) || decoded.id !== userId) {
      return res.status(403).json({ error: 'Invalid user or token mismatch' });
    }

      req.user = decoded;
      next();
         
        }catch(error){
            return res.status(401).json({error: 'Invalid token'});
        }
    
};

module.exports = { authenticateUser };


