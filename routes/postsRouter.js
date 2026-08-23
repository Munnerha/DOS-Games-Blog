// tools needed to build this router
const express = require('express');
const postCtrl = require('../controllers/postCtrl');
const isSignedIn = require('../middleware/isSignedIn');

// create the router itself
const router = express.Router();

// index - list all posts
router.get('/', postCtrl.index);
// new - show the blank form (before /:id so "new" isn't read as an id)
router.get('/new', isSignedIn, postCtrl.new);
// create - save a new post
router.post('/', isSignedIn, postCtrl.create);
// show - view one post
router.get('/:id', postCtrl.show);
// edit - show the pre-filled edit form
router.get('/:id/edit', isSignedIn, postCtrl.edit);
// update - apply edits
router.put('/:id', isSignedIn, postCtrl.update);
// delete - delete a post
router.delete('/:id', isSignedIn, postCtrl.delete);

// share this router with server.js
module.exports = router;