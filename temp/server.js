// *****************************************************************************
// Server.js - App Starting point. Initializes Node JS server
//
// ******************************************************************************
// *** Importing Dependencies
// =============================================================
const express = require("express");
const path = require("path");
// auth dependencies
const expressSession = require("express-session");
const passport = require ("passport");
// db dependencies
const sequelize_fixtures = require("sequelize-fixtures");
// .env 
require("custom-env").env("dev"); //env vars for development

// Importing App Routers
// =============================================================
const authRouter = require("./routes/auth_router");

// Instantiating Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Requiring models for syncing
// =============================================================
const db = require("./models/");

// Importing App Session and Auth Strategy Config
// =============================================================
const session = require("./config/session.config");
const strategy = require("./config/auth-strategy.config");

//setting data parsing middlewares --JSON-- with Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //request body parser

//Static Resources
// Serve up static assets (usually on production)
if (process.env.NODE_ENV === "production") { 
  session.cookie.secure = true;
  app.use(express.static("client/build"));
}

// Auth Middlewares
// =============================================================
app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Creating custom middleware with Express
// res.locals is a property added by authentication server
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});


// Routes
// =============================================================
// Mounting router: authentication
app.use("/", authRouter);
// require("./routes/auth_router.js")(app); //authentication and login api routes
// require("./routes/user_router.js")(app); //student and instructor portals
// require("./routes/html-routes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing DB models and then starting express server
// =============================================================
db.sequelize.sync({ force: true }).then(() => {
  sequelize_fixtures.loadFile("./db/fixtures/*", db).then(() => {
    console.log("===== DB Seeded Properly =====");
    app.listen(PORT, () => {
      console.log(
        `===== SERVER ON => App listening on PORT ${PORT} :: ${process.env.APP_ENV} environment. =====`
      );
    });
  });
});
