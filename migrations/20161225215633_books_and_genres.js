
exports.up = function(knex, Promise) {
 return Promise.all([
          knex.schema.createTable('books_genres', function(table){
							table.integer('book_id').unsigned();
							table.foreign('book_id').references('books.id');
							table.integer('genre_id').unsigned();
							table.foreign('genre_id').references('genres.id');
              table.increments('id');
              table.timestamps();
          })
        ]); 
};

exports.down = function(knex, Promise) {
    return Promise.all([
           knex.schema.dropTable('books_genres')
    ]);
};
