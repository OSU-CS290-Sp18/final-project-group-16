var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


var performerAds = require('./performerAds');
var photographerAds = require('./photographerAds');
var selfCareAds = require('./selfCareAds');

app.get('/', function (req, res, next) {
	res.status(202).render('home');
});

app.get('/home', function (req, res, next) {
	res.status(202).render('home');
});

app.get('/about', function (req, res, next) {
	res.status(202).render('about');
});

app.get('/contact', function (req, res, next) {
	res.status(202).render('contact');
});

app.get('/faq', function (req, res, next) {
	res.status(202).render('faq');
});

app.get('/performers', function (req, res, next) {
	res.status(202).render('service', {
		ad: [performerAds]
	});
});

app.get('/ad/:adTemplate', function (req, res, next) {
  var target = req.params.adTemplate;
  if (performerAds[target]) {
    res.status(200).render('service', {
      ad: [performerAds[target]]});
  } else {
    next();
  }
});

app.get('/photographers', function (req, res, next) {
	res.status(202).render('service', {
		ad: [photographerAds]
	});
});

app.get('/ad/:adTemplate', function (req, res, next) {
  var target = req.params.adTemplate;
  if (photographerAds[target]) {
    res.status(200).render('service', {
      ad: [photographerAds[target]]});
  } else {
    next();
  }
});

app.get('/selfCare', function (req, res, next) {
	res.status(202).render('service', {
		ad: [selfCareAds]
	});
});

app.get('/ad/:adTemplate', function (req, res, next) {
  var target = req.params.adTemplate;
  if (selfCareAds[target]) {
    res.status(200).render('service', {
      ad: [selfCareAds[target]]});
  } else {
    next();
  }
});

app.get('*', function (req, res) {
	res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
