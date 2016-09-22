var User = require("./user.model");
var Controller = {
    register: function(req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var password2 = req.body.password2;
        console.log(name);

        //validation
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


        var errors = req.validationErrors();
        if (errors) {
            res.render('register', {
                errors: errors
            });
        } else {
            var newUser = new User({
                name: name,
                email: email,
                username: username,
                password: password
            });

            User.createUser(newUser, function(err, user) {
                if (err) throw err;
                console.log(user);
            });
            //req.flash('success_msg', 'you are register and can log in');
            console.log('you can now log in');
            res.redirect('/users/login');
        }
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