var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});



userSchema.statics.createUser = function(user, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            user.save(callback);
        });
    });
};

userSchema.statics.getUserByUsername = function(username, callback) {
    return this.findOne({
        username: username
    }, callback);
};

userSchema.statics.getUserById = function(id, callback) {
    return this.findById(id, callback);
};

userSchema.methods.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);
