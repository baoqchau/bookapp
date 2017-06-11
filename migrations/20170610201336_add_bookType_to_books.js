
exports.up = function(knex, Promise) {
  return knex.schema.table('books', function(t){
    t.string('bookTypes');
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.table('books', function(t){
   t.dropColumn('bookTypes');
 });
};
