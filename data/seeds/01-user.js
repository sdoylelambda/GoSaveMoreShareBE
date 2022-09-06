const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          id: 1,
          username: "admin",
          email: "gosavemore@gmail.com",
          password: bcrypt.hashSync("1234admin", 10),
          firstName: "gosave",
          lastName: "more",
          isAdmin: false,
        },
      ]);
    });
};
