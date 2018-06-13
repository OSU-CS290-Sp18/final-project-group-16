var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 1738;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

var performerAds = require('./performerAds');
var photographerAds = require('./photographerAds');
var selfCareAds = require('./selfCareAds');

app.get('/', function (req, res, next) {
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
		ads: performerAds
	});
});

app.get('/performers/:index', function (req, res, next) {
  console.log(performerAds[target]);
  var target = req.params.index;
  if (performerAds[target]) {
    res.status(200).render('service', {
      ads: performerAds[target]});
  } else {
    next();
  }
});


app.get('/photographers', function (req, res, next) {
	res.status(202).render('service', {
		ads: photographerAds
	});
});

app.get('/photographers/:index', function (req, res, next) {
  var target = req.params.index;
  if (photographerAds[target]) {
    res.status(200).render('service', {
      ads: [photographerAds[target]]});
  } else {
    next();
  }
});

app.get('/selfCare', function (req, res, next) {
	res.status(202).render('service', {
		ads: selfCareAds
	});
});

app.get('/selfCare/:index', function (req, res, next) {
  var target = req.params.index;
  if (selfCareAds[target]) {
    res.status(200).render('service', {
      ads: [selfCareAds[target]]});
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
