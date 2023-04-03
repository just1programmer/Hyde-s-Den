const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');

// We get access to the Model Class
const User = mongoose.model('users');

// new GoogleStrategy ===> Creates new Google Strategy. We pass in some configuration that tells this Google strategy how to authenticate users inside of our application.


passport.serializeUser((user,done)=>{
	// Cream un cookie efectiv
	done(null,user.id);
})

passport.deserializeUser((id,done)=>{
	User.findById(id).then((user)=>{
		done(null,user);
	});
})



passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(profile)
			// Here we can identify users & save to DB .
			User.findOne({googleId:profile.id}).then((existingUser)=>{
				if(existingUser){
					console.log('We already have someone with this ID')
					done(null,existingUser);
				} else{
					// We save the new id in our mongodb Collection
					new User({
						googleId: profile.id,
						name: profile.name.familyName + " " + profile.name.givenName,
					}).save().then((user)=>{
						done(null,user);
					});
				}
			})
		}
	)
);
