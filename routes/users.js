var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
/* GET users listing. */
router.get('/', function(req, res, next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    res.send({ date: date });
});

module.exports = router;