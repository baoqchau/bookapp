
exports.up = function(knex, Promise) {
  return Promise.all([
          knex.schema.createTable('books', function(table){
              table.string('title');
              table.string('author');
			  table.string('image');
              table.increments('id');
              table.timestamps();
          })
        ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
           knex.schema.dropTable('books')
    ]); 
};
