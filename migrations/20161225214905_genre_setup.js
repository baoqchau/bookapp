
exports.up = function(knex, Promise) {
 return Promise.all([
          knex.schema.createTable('genres', function(table){
              table.string('name');
              table.increments('id');
              table.timestamps();
          })
        ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
           knex.schema.dropTable('genres')
    ]); 
};
