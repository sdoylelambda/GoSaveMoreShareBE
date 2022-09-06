exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tag")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tag").insert([{ product_id: 1, tag: "featured" }]);
    });
};
