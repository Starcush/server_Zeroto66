const express = require('express');
const router = express.Router();
const { userController } = require('../controller');
const utils = require('../modules/utils');

// * POST /user/signin
router.post('/signin', userController.signin.post);

// * POST /user/signup
router.post('/signup', userController.signup.post);

// * GET /user/signout
router.get('/signout', utils.checkToken, userController.signout.get);

// * GET /user/info
router.get('/info', utils.checkToken, userController.info.get);

module.exports = router;
