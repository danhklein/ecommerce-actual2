exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('orders').del(), 

    // Inserts seed entries
    knex('orders').insert(

        {
    user_id : 1,
  }),
    knex('orders').insert(
  
        {
    user_id : 2,
  }),
    knex('orders').insert(
  
        {
    user_id : 3,
  }),
    knex('orders').insert(
          
        {
    user_id : 4,
  })
    
    
  );
};