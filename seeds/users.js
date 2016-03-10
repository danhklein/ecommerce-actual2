exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert(

        {
    name : "Sam",
    email: "sam@gov.com",
    password: "USA111",
    admin: true,
      
  }),
    knex('users').insert(
  
        {
    name : "Sam",
    email: "sam@gov.com",
    password: "USA111",
    admin: false,
      
  }),
    knex('users').insert(
  
        {
    name : "Sam",
    email: "sam@gov.com",
    password: "sam111",
    admin: false,
      
  }),
    knex('users').insert(
  
        {
    name : "Kim",
    email: "kim@gov.com",
    password: "kim111",
    admin: false,
      
  }),
    knex('users').insert(
  
        {
    name : "Luda",
    email: "luda@gov.com",
    password: "luda111",
    admin: false,
      
  }),
    knex('users').insert(
  
        {
    name : "Anna",
    email: "anna@gov.com",
    password: "anna111",
    admin: true,
      
})
  );
};