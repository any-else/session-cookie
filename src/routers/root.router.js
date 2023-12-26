const authRoute = require("./auth.router");

const rootRouter = (app) => {
  authRoute(app);
};

module.exports = rootRouter;
