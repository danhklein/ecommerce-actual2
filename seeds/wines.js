exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('wines').del(), 

    // Inserts seed entries
    knex('wines').insert(

        {
    name : "Cabernet",
    type: "red",
    country: "USA",
    image: "/images/cabernet.jpg",
    description: "Very good!",
    price: 50,
    
  }),
    knex('wines').insert(
  {
    name : "Chardonnay",
    type: "white",
    country: "Italy",
    image: "/images/chardonnay.jpg",
    description: "Very sweet!",
    price: 15,
  }),
    knex('wines').insert(
  {
    name : "Moscato",
    type: "pink",
    country: "USA",
    image: "/images/moscato.jpg",
    description: "Very tart!",
    price: 45,
  }),
    knex('wines').insert(
  {
    name : "Pinotgrigio",
    type: "white",
    country: "France",
    image: "/images/pinotgrigio.jpg",
    description: "Very light!",
    price: 35,
  }),
    knex('wines').insert(
  {
    name : "Zinfandel",
    type: "pink",
    country: "USA",
    image: "/images/zinfandel.jpg",
    description: "Very very good!",
    price: 65,
  }),
    knex('wines').insert(
  {
    name : "Riesling",
    type: "white",
    country: "USA",
    image: "/images/riesling.jpg",
    description: "Very sweet!",
    price: 15,
})
  );
};