const express = require('express');
const { getLogin, getSignUp } = require('../controllers/AuthController');
const router = express.Router();

router.route('/login').get(getLogin);
router.route('/signup').get(getSignUp);

module.exports = router;