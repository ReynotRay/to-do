var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;
var todoSchema = mongoose.Schema({
    todo: String,
    user_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('todo', todoSchema);