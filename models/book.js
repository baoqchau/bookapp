var knex = require('knex')(require('../knexfile'));

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');
var Book = Bookshelf.Model.extend({
    tableName: 'books'
});

module.exports = Bookshelf.model('Book', Book);
