var Todo = require('./todo.model');

var Controller = {

    getItems: function(req, res, next) {
        Todo.find({
            user_id: req.user.id
        }, function(err, todos) {
            if (err) {
                next(err);
            } else {
                res.status(200).json(todos);
            }
        });
    },

    addItem: function(req, res, next) {
        console.log('user', req.user);
        Todo.create({
            user_id: req.user._id,
            todo: req.body.todo
        }, function(err) {
            if (err) {
                next(err);
            } else {
                res.status(201).end();
            }
        });

    },

    updateItem: function(req, res) {

    },

    deleteItem: function(req, res) {

    }

};

module.exports = Controller;