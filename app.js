const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
// const cors = require("cors");
const path = require("path");
dotenv.config();

// db connection
const db = require("./config/db");
db(process.env.MONGO_URI);

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

// morgan
app.use(morgan("dev"));
// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// express-validator
app.use(expressValidator());
// cookie-parser
app.use(cookieParser());
// express jwt error handling
// ovo mi ne radi
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized!" });
  }
});
// cors
// app.use(cors());

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

// auth routes
const auth = require("./nodeapi/auth/routes");
app.use("/", auth);

// user routes
const account = require("./nodeapi/account/routes");
app.use("/", account);

// projects route
const projects = require("./nodeapi/projects/routes");
app.use("/", projects);

//
// ─── THIS IS SETUP FOR HEROKU DEPLOY ────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//
// ─── SERVER CONNECT ─────────────────────────────────────────────────────────────
//

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Devxad start on port: ${port}`);
});
