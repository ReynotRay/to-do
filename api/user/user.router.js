var express = require('express');
var router = express.Router();
var passport = require('passport');
var controller = require('./user.controller');

router
    .route('/login')
    .get(function(req, res) {
        res.render('login');
    })
    .post(passport.authenticate('local', {
            successRedirect: '/users/todoapp',
            failureRedirect: '/users/login',
        }),
        controller.login);


router.
route('/register')
    .get(controller.getRegister)
    .post(controller.register);


router
    .get('/dashboard', controller.dashboard)
    .get('/todoapp', controller.todoapp)
    .get('/logout', controller.logout);



module.exports = router;