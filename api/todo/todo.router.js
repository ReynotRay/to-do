var express = require('express');
var router = express.Router();
var controller = require('./todo.controller');

router
    .route('/')
    .get(controller.getItems)
    .post(controller.addItem);

router
    .route('/:id')
    .put(controller.updateItem)
    .delete(controller.deleteItem);

module.exports = router;