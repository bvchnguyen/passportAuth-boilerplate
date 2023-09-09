const router = require('express').Router();

const isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

module.exports = function(passport) {
    
    router.post('/login')
          .post('/signup')

}