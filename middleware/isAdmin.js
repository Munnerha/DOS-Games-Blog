const isAdmin = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/posts');
    }
    
    if (req.session.user.role !== 'admin') {
      return res.redirect('/posts');
    }
    
    next();
}

module.exports = isAdmin;
