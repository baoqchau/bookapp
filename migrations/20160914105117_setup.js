
exports.up = function(knex, Promise) {
  return Promise.all([
          knex.schema.createTable('books', function(table){
							table.increments('id');
              table.string('title');
              table.string('author');
			  			table.string('image');
							table.longtext('summary');
              table.timestamps();
          })
        ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
           knex.schema.dropTable('books')
    ]); 
};
