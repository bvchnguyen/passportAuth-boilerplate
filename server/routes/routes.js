const { registerUser, loginUser, getProfileData, logoutUser } = require('../controllers/authenticate');

const passport = require('passport');
const router = require('express').Router();

router.post('/signup', registerUser)
        .get('/signup', (req, res) =>{
            res.send('<h1>Signup Successful</h1>')
        })
        .post('/login', loginUser)
        .get('/login', (req, res) =>{
            res.send('<h1>Login Successful</h1>')
        })
        .post("/logout", (req, res, next) => {
            res.cookie("jwt", "", { expires: new Date(0) });
            req.logout(function (err) {
                if (err) {
                    return next(err);
                }
                console.log("Logged out");
                res.redirect("http://localhost:3002/login");
            });
        })
        .get('/protected-route', passport.authenticate('jwt', { session: false }), (req, res) => {
            res.json({ message: 'You have access to this protected route!' });
        })
        .get('/getProfile', passport.authenticate('jwt', { session: false }), getProfileData) 
module.exports = router;