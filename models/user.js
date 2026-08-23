const mongoose = require('mongoose');

// pulls in the Post schema for embedding
const postSchema = require('./post');

// create the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

// 'admin' can write posts, 'user' cannot
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },

  // holds this user's embedded blog posts
  posts: [postSchema],
});


// initial the model

const User = mongoose.model('User', userSchema);

// export it
module.exports = User;
