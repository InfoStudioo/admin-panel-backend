const User = require('../models/users');

exports.getAllUsers = async(req , res ) => {
    try{
      
        const { userId } = req.query;

        const users = await User.findAll({
            attributes: ['id', 'username', 'email', 'role', 'created_at' ],
          });

          res.status(200).json({users});

    }catch (error) {

        res.status(500).json({ message: 'Failed to fetch users', error });

      }
};


exports.updateUserRole = async(req , res) => {
    try{
        
        const { id, userId, newRole } = req.body;

        const validRoles = ['admin', 'editor', 'viewer'];

        if (!validRoles.includes(newRole)) {

          return res.status(400).json({ message: 'Invalid role provided' });

        }

        const requester = await User.findByPk(userId);

        if (requester.role !== 'admin') {

            return res.status(403).json({ message: 'Only admins can change roles' });

          }

         const  user = await User.findByPk(id);
         if (!user) return res.status(404).json({ message: 'User not found' });

        user.role = newRole;
        await user.save();

        res.status(200).json({ message: 'Role updated successfully', user });

    } catch (error) {

        res.status(500).json({ message: 'Failed to update the Role', error });

      }
};



exports.deleteUser = async(req , res) => {
    try{

       const {id, userId } = req.body;

       const requester = await User.findByPk(userId);

       if (requester.role !== 'admin'){

        return res.status(403).json({ message: 'Access denied' });

       } 

       const user = await User.findByPk(id);

       if (!user) return res.status(404).json({ message: 'User not found'});

       await user.destroy();

       res.status(200).json({ message: 'User deleted successfully' });


    }catch (error) {

      res.status(500).json({ message: 'Failed to delete user', error });

    }
};