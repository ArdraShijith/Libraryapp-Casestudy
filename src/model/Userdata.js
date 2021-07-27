
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ArdraShijith:ARDRAammu11@ardrashijith.uzs2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


// User Schema
const UserSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  confirmpassword:String 
});

const Userdata = mongoose.model('userdata', UserSchema);
module.exports= Userdata;