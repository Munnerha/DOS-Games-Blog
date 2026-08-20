const express = require ('express');
const applicationsCtrl = require ('../controllers/applicationsCtrl');
const isSignedIn = require ('../middleware/isSignedIn');
const router = express.Router({mergeParams: true});

// Customer middleware
router.use(isSignedIn);

// Applications
router.get('/', applicationsCtrl.index);
router.get('/new', applicationsCtrl.new);
router.post('/', applicationsCtrl.create);
router.get('/:appId', applicationsCtrl.show);
router.delete('/:appId', applicationsCtrl.delete);
router.get('/:appId/edit', applicationsCtrl.edit);
router.put('/:appId', applicationsCtrl.update);

module.exports = router;
