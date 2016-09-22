var indexRouter = require('../api/index/index.router');
var todoRouter = require('../api/todo/todo.router');
var userRouter = require('../api/user/user.router');

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/users', userRouter);
    app.use('/todos', todoRouter);

};