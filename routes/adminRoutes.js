const express = require('express');
const { getAllUsers, deleteUser, updateUserRole} = require('../controllers/adminController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();



router.get('/get_all_users', authenticateUser, getAllUsers);

router.delete('/delete_user', authenticateUser, deleteUser);


router.put('/update_user_role', authenticateUser, updateUserRole);

module.exports = router;