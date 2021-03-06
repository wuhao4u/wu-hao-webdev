module.exports = function (app) {
    var mongoose = require("mongoose");

    var userModel = require("./user/user.model.server.js")();
    var websiteModel = require("./website/website.model.server.js")();
    var pageModel = require("./page/page.model.server.js")();
    var widgetModel = require("./widget/widget.model.server.js")();

    var connectionString = 'mongodb://127.0.0.1:27017/assignment';

    if(process.env.MONGODB_URI){
        connectionString = process.env.MONGODB_URI;
    } else if (process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    mongoose.createConnection(connectionString);
    // mongoose.connect(connectionString);

    // userModel.createUser({username: "mojo", password: "mojo", firstname: "mo", lastName: "jo"});
    // userModel.findUserByUsername("mojo")
    //     .then(function (user) {
    //     });

    // var users = db.collection("user");
    /*
    function insertSampleUsers() {
        var users = [
            {username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];
    }
    */

    var model = {
        "UserModel": userModel,
        "WebsiteModel": websiteModel,
        "PageModel": pageModel,
        "WidgetModel": widgetModel
    };
    return model;
};