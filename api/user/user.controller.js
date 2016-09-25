var User = require("./user.model");
var Controller = {
    register: function(req, res) {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, function(err, user) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/users/login');
            }
        });
    },

    getRegister: function(req, res) {
        res.render('register');
    },

    login: function(req, res) {
        res.redirect('/users/dasboard');
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/users/login');
    },

    dashboard: function(req, res) {
        res.render('dashboard');
    },

    todoapp: function(req, res) {
        res.render('todoapp');
    }
};

module.exports = Controller;