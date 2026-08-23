const express = require('express');
const isSignedIn = require('../middleware/isSignedIn');

const router = express.Router({ mergeParams: true });

const authCtrl = require('../controllers/authCtrl');

router.get('/sign-up', authCtrl.signup);
router.post('/sign-up', authCtrl.register);
router.get('/sign-in', authCtrl.signin);
router.post('/sign-in', authCtrl.login);
// hidden admin sign-in
router.get('/admin-sign-in', authCtrl.adminSignin);
router.post('/admin-sign-in', authCtrl.adminLogin);

// PRIVATE ROUTES
router.get('/sign-out', isSignedIn, authCtrl.signout);

module.exports = router;
