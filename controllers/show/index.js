/**
 * Created by maengsuhyeon on 2016. 12. 29..
 */


var express = require('express');
var router = express.Router();

router.get('/', function(req,res, next){
    res.render('index', {title: 'Express'});
});

module.exports = router;

