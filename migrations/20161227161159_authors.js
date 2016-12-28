
exports.up = function(knex, Promise) {
 return Promise.all([
          knex.schema.createTable('authors', function(table){
							table.increments('id');
              table.string('name');
			  			table.string('image');
							table.longtext('summary');
              table.timestamps();
          })
        ]); 
};

exports.down = function(knex, Promise) {
  return Promise.all([
           knex.schema.dropTable('authors')
    ]); 
};
