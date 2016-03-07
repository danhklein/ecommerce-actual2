var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fine Wine' });
});


router.get('/products', function(req, res, next) {
  res.render('product', { title: 'Our Finest Wares' });
});

router.get('/products/:id', function(req, res, next) {
  res.render('product', { title: 'This wine'});
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout' });
});

router.get('/invoice', function(req, res, next) {
  res.render('invoice', { title: 'Receipt' });

});






module.exports = router;
