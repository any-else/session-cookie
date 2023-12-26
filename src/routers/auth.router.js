const AuthController = require("../controllers/auth.controller");

const authRoute = (app) => {
  // sign-up
  app.post("/api/v1/auth/sign-up", AuthController.signUP);
  //login
  app.post("/api/v1/auth/login", AuthController.login);
  //get All
  app.get("/api/v1/users", AuthController.getAllUser);
};

module.exports = authRoute;
