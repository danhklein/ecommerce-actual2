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

router.post('/checkout',function (req, res, next) {
  var body = req.body;
  res.send('form': body)


router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});

}




module.exports = router;
