var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/Blogs');
require('../models/Comments');
require('../models/Profile');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');
var Profile = mongoose.model('Profile')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/blogs', function(req, res, next) {
  Blog.find(function(err, data){
    if(err){ return next(err); }

    res.json(data);
  });
});

router.get('/profile', function(req, res, next) {
  Profile.find(function(err, data){
    if(err){ return next(err); }

    res.json(data);
  });
});


router.post('/profile', function(req, res, next) {

  var profile = new Profile(req.body);
  profile.save(function(err, profile){
    if(err){ return next(err); }

    res.json(profile);
  });
});

module.exports = router;
