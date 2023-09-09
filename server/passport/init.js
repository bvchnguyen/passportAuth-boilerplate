const login = require('./login');
const signup = require('./signup');
const user = require('../models/userModel');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log('serializing user: ', user);
        done(null, user._id);
    
    });
    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            console.log('deserializing user: ', user);
            done(err, user);
        });
    });

    login(passport);
    signup(passport);
}