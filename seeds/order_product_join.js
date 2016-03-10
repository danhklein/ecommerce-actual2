exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('order_product_join').del(), 

    // Inserts seed entries
    knex('order_product_join').insert(

        {
    user_id : 1,
    wine_id: 1,
    quantity: 3,

  }),
    knex('order_product_join').insert(
  {
    user_id : 2,
    wine_id: 5,
    quantity: 3,
  }),
    knex('order_product_join').insert(
  
       {
    user_id : 5,
    wine_id: 3,
    quantity: 3,
  }),
    knex('order_product_join').insert(
        {
    user_id : 5,
    wine_id: 1,
    quantity: 1,
  })
    
    
  );
};