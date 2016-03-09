

exports.up = function(knex, Promise) {
 return knex.schema.createTable('order_product_join', function(table){
     table.integer('user_id').references('id').inTable('users');
     table.integer('wine_id').references('id').inTable('wines');
     table.integer('quantity');
 })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('order_product_join');

};