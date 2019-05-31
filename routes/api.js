/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require('../models/user');

// Registration form
// router.get("/register", function (req, res) {
//     res.render("register");
// });

// User Register
// router.post("/register", function (req, res) {
//     User.register(new User({ name: req.body.name, username: req.body.username,role:req.body.role }), req.body.password, function (err, user) {
//         if (err) {
//             //console.log(user);
//             console.log(err.name);
//             return res.render("registrationError", {err});
//         }
//         passport.authenticate("local")(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });

// Login form
// router.get("/login", function (req, res) {
//     if(req.user) {                              //check if alredy logged in
//         return res.redirect("/");
//     }
//     res.render("login");
// });

// User Login
router.post("/login", passport.authenticate("local", {
}),
    function (req, res) {
        
        res.send(req.user);
    });

// User Logout
router.get("/logout", function (req, res) {
    req.logout();    ///destroying user session
    req.user = undefined;
    res.redirect("/");
});

module.exports = router;
