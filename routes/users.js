var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/books', function(req, res, next){
    Book.fetchAll().then(function(books){
        res.json({books});
    });
 });

router.post('/books', function(req, res, next){
    new Book({
        title: "Potterhead",
        author: "Rowling"
    })
       .save()
       .then(function(saved){
           res.json({saved});
       });
   });

module.exports = router;
