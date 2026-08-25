const User = require('../models/user');

const home = async (req, res) => {
  try {
    // Find the admin user (who holds all posts)
    const adminUser = await User.findOne({ role: 'admin' });
    
    // Get their posts, or empty array if no admin exists
    let posts = [];
    if (adminUser) {
      posts = adminUser.posts;
    }
    
    // Render the homepage and pass the posts
    res.render('index.ejs', { posts });
    
  } catch (err) {
    console.log(err);
    // If error, render with empty posts
    res.render('index.ejs', { posts: [] });
  }
};

module.exports = {
  home,
};