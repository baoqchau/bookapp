var express = require('express');
var router = express.Router();

var Book = require('../models/book');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addbook', function(req, res){
    res.render('newbook', {title: 'Add new Book'});
});

router.get('/delbook', function(req, res){
    res.render('delbook', {title: 'Delete a book'});
});

//post to add book service
router.post('/addbook', function(req, res){
    var title = req.body.title;
    var author = req.body.author;
    new Book({
        title: title,
        author: author
    })
        .save()
        .then(function(saved){
            res.json({saved});
        });
}); 

router.get('/books', function(req, res, next){
    res.render('books',  {title: 'List of all books', books: Book});
 });

router.post('/delbook', function(req, res, next){
    Book
        .where('title', req.body.title)
        .destroy()
        .then(function(destroyed){
            res.json({destroyed});
        });
});

module.exports = router;
