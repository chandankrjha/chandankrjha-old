var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profession: String,
  hobbies : String
});

mongoose.model('Profile', ProfileSchema);
