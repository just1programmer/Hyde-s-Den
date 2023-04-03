const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
// We require the Model class 
require('./models/user');
// we need to require the passport config from our ./services/passport.js
require("./services/passport");
// When we do so , the code from passport will get basically copied and executed here :)
// We use the mongo keys.. 
const keys = require('./config/keys')
// authRoutes is basically now a function that expects an app object :)
const authRoutes = require("./routes/authRoutes");
mongoose.connect(keys.mongoURI);

const app = express();
// we make our server to include cookies by default.
app.use(cookieSession({
    maxAge:180*24*60*60*1000,
    keys:[keys.cookieKey]
}))


//  We tell passport to make use of Cookies to handle auth
app.use(passport.initialize());
app.use(passport.session());

// we call authRoutes(app) so that the app can start to listen for auth requests :)
authRoutes(app);

app.listen(5000);

 