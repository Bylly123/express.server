var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
});

module.exports = router;