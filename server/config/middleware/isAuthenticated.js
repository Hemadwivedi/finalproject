module.exports = function(req, res, next) {
    if (req.user) {
      return next();
    }
    res.status(401).json("User is not authorized");
  };