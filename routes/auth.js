/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require('../models/user');

// Registration form
router.get("/register", function (req, res) {
    res.render("register");
});

// User Register
router.post("/register", function (req, res) {
    User.register(new User({ name: req.body.name, username: req.body.username, role:req.body.role, age: req.body.age , gender: req.body.gender}), req.body.password, function (err, user) {
        if (err) {
            //console.log(user);
            console.log(err.name);
            return res.render("registrationError", {err});
        }
        passport.authenticate("local")(req, res, function () {
            console.log(User);
            res.render('dashBoard');
        });
    });
});

// Login form
router.get("/login", function (req, res) {
    if(req.user) {                              //check if alredy logged in
        return res.redirect("/");
    }
    res.render("login");
});

// User Login
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/auth/login"
}),
    function (req, res) {
    
        if(req.query.next != undefined) {
            res.redirect(`${req.query.next}`);
        } else {
            if(req.user.role=="ANM")
                { var dataname = req.user;
                res.render('anm', {dataname: dataname});
            }
            if(req.user.role=="MO")
                { var dataname = req.user;
                res.render('mo' , {dataname: dataname});
}
            if(req.user.role=="BMO")
            { var dataname = req.user;
                res.render('bmo', {dataname: dataname});

            }
        }
    });

// User Logout
router.get("/logout", function (req, res) {
    req.logout();    ///destroying user session
    req.user = undefined;
    res.redirect("/");
});

module.exports = router;

// prince and 

// chandan
