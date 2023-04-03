const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Cream o schema, toate noiile entry-uri in baza de date trebuie sa respecte schema asta. 
const userSchema = new Schema({
    googleId: String,
    name: String,
});

// Cream un model class . 
mongoose.model('users',userSchema);

