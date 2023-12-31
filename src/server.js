const express = require("express");
const rootRoute = require("./routers/root.router");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// Set up cookie
app.use(cookieParser());
//middleware global
app.use(bodyParser.json());

//ROuter
rootRoute(app);

//Host
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
