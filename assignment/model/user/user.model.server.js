module.exports = function (app) {
    var mongoose = require("mongoose");
    mongoose.Promise = require('q').Promise;

    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCreadentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    };

    return api;

    // Creates a new user instance
    function createUser(user) {
        console.log("got it in assignment user model");
        return UserModel.create(user);
    }

    // Retrieves a user instance whose _id is equal to parameter userId
    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    // Retrieves a user instance whose username is equal to parameter username
    function findUserByUsername(username) {
        return UserModel.findOne({username: username});

    }

    // Retrieves a user instance whose username and password are equal to parameters userId and password
    function findUserByCreadentials(username, password) {
        return UserModel.findOne({
                username: username,
                password: password
            });
    }

    // Updates user instance whose _id is equal to parameter userId
    function updateUser(userId, user) {
        return UserModel.update({
            _id: userId
        }, {
            // password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
        });
    }

    // Removes user instance whose _id is equal to parameter userId
    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }
};