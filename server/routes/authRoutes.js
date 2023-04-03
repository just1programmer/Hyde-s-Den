// because we are using the passport library to authenticate, we need to import the library. :) 
// Now we got also app object from express here.. so we need to do a trick to make this work. we need the app object from index.js

const passport = require('passport')
const mongoose = require("mongoose");

// We get access to the Model Class
const User = mongoose.model("users");
// Now we exporting a function :) and we assume we call this function with our express app object


module.exports =(app)=>{
	// Google Auth route handler
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"],
		})
	);

	// Here the user has the code returned from authentication . Google Strategy will see that and will handle the request differently
	// It will exchange the code for the actual user profile
	
	// Aici suntem in redirect callback , dupa ce am inregistrat userii
	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			console.log('=============== Sunt in callback')
			console.log('Sunt logat ca si + ',req.user);
			res.send("Hello, "+req.user.name);
		}
	);

	app.get('/logout',(req,res)=>{
		console.log(req.user)
		res.send('logged out')
	})

	// Am reusit sa sterg user 
	app.get('/delete',async (req,res)=>{
				let userId = req.user._id;
				await User.deleteOne({ _id: req.user._id });
				res.send("Am sters userul cu id : "+userId);
	})
}


