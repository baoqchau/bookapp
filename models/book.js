var knex = require('knex')(require('../knexfile'));

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');
var Book = Bookshelf.Model.extend({
    tableName: 'books',
		genres: function() {
			return this.belongsToMany(Genre);
		}
});

var Genre = Bookshelf.Model.extend({
	tableName: 'genres',
	books: function() {
		return this.belongsToMany(Book);
	}
});



module.exports = Bookshelf.model('Book', Book);
