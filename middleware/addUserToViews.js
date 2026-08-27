const addUserToViews = (req, res, next) => {
  const { user } = req.session;
  if (user) {
    res.locals.user = user;
  } else {
    res.locals.user = null;
  }

  // makes the current URL available in every view (for the _navbar)
  res.locals.currentPath = req.originalUrl;
  
  next();
};

module.exports = addUserToViews;
