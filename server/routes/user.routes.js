const UserController = require(`../controllers/user.controller`);
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.post("/api/users/logout", UserController.logout);
    app.get("/api/allUsers", UserController.findAllUsers);
    app.get("/api/users/secure", authenticate, UserController.getLoggedInUser);
    app.delete("/api/users/:userid", UserController.deleteUser);
};