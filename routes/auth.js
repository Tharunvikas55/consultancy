const express = require('express');
const { getLogin, getSignUp, postLogin } = require('../controllers/AuthController');
const { signUpPost } = require('../controllers/CustomerController');
const router = express.Router();

router.route('/login').get(getLogin);
router.route('/signup').get(getSignUp);
router.route('/login').post(postLogin);
router.route('/signup').post(signUpPost);

module.exports = router;