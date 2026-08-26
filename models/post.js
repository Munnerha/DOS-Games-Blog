// Load the mongoose library so we can build a schema below
const mongoose = require('mongoose');

// Define the shape of one blog post
const postSchema = new mongoose.Schema(
  {
    // The post's title — must be text, and cannot be left empty
    title: {
      type: String,
      required: true,
    },
        // The main written content of the post — required, since a post
    // with no text wouldn't make sense
    body: {
      type: String,
      required: true,
    },
        // Optional image URL to show at the top of the post
    coverImage: String,
    // Optional path to a .jsdos bundle for an embedded playable shareware episode
    gameFile: String,
  },
    // Automatically adds createdAt and updatedAt fields to every post
  { timestamps: true }
);
//export the SHCEMA
module.exports = postSchema;