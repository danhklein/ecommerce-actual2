
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', function(table){
    table.increments();
    table.string('name');
    table.string('type');
    table.string('country');
    table.string('image');
    table.string('description');
    table.decimal('price');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines');
};
