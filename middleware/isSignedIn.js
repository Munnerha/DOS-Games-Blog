const isSignedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/posts');
  }
};

module.exports = isSignedIn;
