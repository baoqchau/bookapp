var express = require('express');
var router = express.Router();
var _ = require('lodash');

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

//get a specific book page
router.get('/book/:id', function(req, res, next){
	Book
		.where({id: req.params.id})
		.fetch()
		.then(function(result){
			console.log(result.toJSON());
			res.render('bookSpec', {title: result.toJSON().title, book: result.toJSON()});
		});
});
//post to add book service
router.post('/addbook', function(req, res){
    var title = req.body.title;
    var author = req.body.author;
	var image = req.body.image;
    new Book({
        title: title,
        author: author,
		image: image
    })
        .save()
        .then(function(){
            res.redirect('/books');
        });
}); 

function serialize_book(book){
	var book_alone = book.toJSON();
	book_alone.genres = _.map(book.related('genres').toJSON(), 'name').join(',');
	console.log(book.related('genres').toJSON());
	console.log(book_alone);
	return book_alone;
}

router.get('/books', function(req, res, next){
    Book
        .fetchAll({withRelated: ['genres']})
        .then(function(result){
						//console.log(result.toJSON());
						//console.log(result.map(serialize_book));
            res.render('books', {title: 'List of all books', books: result.map(serialize_book)});
        });
});

router.get('/bookbyrowling', function(req, res, next){
	Book
		.where({author: 'JK Rowling'})
		.fetchAll()
		.then(function(result){
			console.log(result.toJSON());
			res.render('books', {title: 'Books by JK Rowling', books: result.toJSON()});
		});
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
