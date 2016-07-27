var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  link: String,
  content : String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Blog', BlogSchema);
