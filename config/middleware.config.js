var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var exphbs = require('express-handlebars');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../api/user/user.model');
var expressValidator = require('express-validator');

module.exports = function(app) {

    app.set('views', path.join(__dirname, '../', 'views'));
    app.engine('handlebars', exphbs({
        defaultLayout: 'layout'
    }));

    app.set('view engine', 'handlebars');

    app.use(express.static(path.join(__dirname, '../', 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(session({
        secret: 'keyboard cat',
        resave: 'false',
        saveUninitialized: 'false'
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(expressValidator());

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.getUserByUsername(username, function(err, user) {
                if (err) throw err;
                if (!user) {
                    return done(null, false, {
                        message: 'Unknown User'
                    });
                }

                user.comparePassword(password, user.password, function(err, isMatch) {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: 'Invalid password'
                        });
                    }
                });
            });
        }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.getUserById(id, function(err, user) {
            done(err, user);
        });
    });

    app.use(function(req, res, next) {
        res.locals.user = req.user || null;
        next();
    });
};