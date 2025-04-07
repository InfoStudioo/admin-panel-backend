const express = require('express');
const {createUser, loginUser, landToDashboard} = require('../controllers/userController');
const router = express.Router();

router.post('/create_user', createUser);

router.post('/user_login', loginUser);

router.post('/admin_dashboard', landToDashboard);

module.exports = router
