// *****************************************************************************
// AUTH0 LOGIN ROUTES
// ******************************************************************************

// MODULE DEPENDENCIES
const express = require("express");
const router = express.Router();
const passport = require("passport");
const querystring = require("querystring");


// AUTH ROUTES: LOGIN
router.get("/login", passport.authenticate("auth0", {
    scope: "openid email profile"
}), (req, res) => {
    res.redirect("/");
});


// AUTH ROUTES: CALLBACK (MIDDLEWARE)
// custom callback that handles authentication
// sucess or failure and send response to client.
router.get("/callback", (req, res, next) => {
    passport.authenticate("auth0", (err, user, info) => {
        if(err){return next(err);}
        if(!user){return res.redirect("/login");}
        //passport login function
        req.logIn(user, (err) => {
            if(err){ return next(err);}
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            req.redirect(returnTo || "/");
        });
    })(req, res, next);
});


// AUTH ROUTES: LOGOUT
router.get("/logout", (req, res) => {
    req.logOut();

    let returnTo = req.protocol + "://" + req.hostname;
    const port = req.connection.localPort;

    if (port !== undefined && port !== 80 && port !== 443) {
        returnTo =
        process.env.NODE_ENV === "production"
            ? `${returnTo}/`
            : `${returnTo}:${port}/`;
    }

    const logoutURL = new URL(
        `https://${process.env.AUTH0_DOMAIN}/v2/logout`
    );

    const searchString = querystring.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: returnTo
    });
    logoutURL.search = searchString;

    res.redirect(logoutURL);
});



// MODULE EXPORTS
module.exports = router;



// *****************************************************************************
// PREVIOUS LOGIN ROUTES
// ******************************************************************************

// //Importing helping functions from utils
// //===========================================
// const VerifySignUp = require("../middlewares/fnVerifySignUp");
// const JwtTokenValidator = require("../middlewares/fnVerifyJwtToken");

// // auth routes
// module.exports = (app) => {
//     //including controller here to be exported
//     const authController = require("../controllers/auth_controller");

//     //defining route for signup
//     app.post("/api/auth/signup", [VerifySignUp.fnCheckDuplicateEmail, VerifySignUp.fnCheckRoles], authController.signup);

//     //defining route for signin
//     app.post("/api/auth/signin", authController.signin)

//     //Defining test routes
//     app.get('/api/test/user', JwtTokenValidator.fnVerifyToken, authController.userContent);

//     //token validation only
//     app.get("/api/auth/token", JwtTokenValidator.fnVerifyToken, authController.tokenValidation);

//     //password reset
//     app.post("/api/auth/pwdreset", JwtTokenValidator.fnVerifyToken, authController.passwordReset);
// }
