const User = require('../models/user');

// finds the one admin account (you)
const getAdminUser = async () => {
  return User.findOne({ role: 'admin' });
};

// shows the list of all blog posts
const index = async (req, res) => {
  try {
    const adminUser = await getAdminUser();

    // default to an empty list if there's no admin yet
    let posts = [];
    if (adminUser) {
      posts = adminUser.posts;
    }

    res.render('posts/index.ejs', { posts: posts });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
};

// shows one specific post
const show = async (req, res) => {
  try {
    const adminUser = await getAdminUser();
    // grab the post matching this id
    const post = adminUser.posts.id(req.params.id);

    res.render('posts/show.ejs', { post });
  } catch (err) {
    console.log(err);
    res.redirect('/posts');
  }
};

// shows the blank "new post" form
const newPost = async (req, res) => {
  try {
    res.render('posts/new.ejs');
  } catch (err) {
    console.log(err);
    res.redirect('/posts');
  }
};

// saves a new post
const create = async (req, res) => {
  try {
    const adminUser = await User.findById(req.session.user._id);

    // add the post, then save
    adminUser.posts.push(req.body);
    await adminUser.save();

    res.redirect('/posts');
  } catch (err) {
    console.log(err);
    res.redirect('/posts/new');
  }
};

// shows the edit form, pre-filled with this post's data
const edit = async (req, res) => {
  try {
    const adminUser = await getAdminUser();
    const post = adminUser.posts.id(req.params.id);
    res.render('posts/edit.ejs', { post });
  } catch (err) {
    console.log(err);
    res.redirect('/posts');
  }
};

// applies edits and saves them
const update = async (req, res) => {
  try {
    const adminUser = await User.findById(req.session.user._id);
    const post = adminUser.posts.id(req.params.id);

    post.set(req.body);
    await adminUser.save();

    res.redirect(`/posts/${post._id}`);
  } catch (err) {
    console.log(err);
    res.redirect('/posts');
  }
};

// removes one post from the admin's posts list
const deletePost = async (req, res) => {
  try {
    const adminUser = await User.findById(req.session.user._id);
    // find the post then remove it
    adminUser.posts.id(req.params.id).deleteOne();
    await adminUser.save();

    res.redirect('/posts');
  } catch (err) {
    console.log(err);
    res.redirect('/posts');
  }
};

// share these with the router file
module.exports = {
  index,
  show,
  new: newPost,
  create,
  edit,
  update,
  delete: deletePost,
};

