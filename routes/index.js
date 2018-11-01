var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('HeadLine.html', { root : 'public'})
});

router.get('/news', function(req, res, next){
    var url = "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=e4f6dead2a5d445e9ac2f3dbaca9ff4b";
    console.log(url);
    // url += "?format=json";
    request(url).pipe(res);
});

module.exports = router;
