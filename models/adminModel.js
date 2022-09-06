const db = require("../data/db-config");

module.exports = {
  getUsers,
  findUserByID,
  findByUsername,
  addUser,
};

function getUsers() {
  return db("user");
}

function findUserByID(id) {
  return db("user")
    .join("address", "user.id", "address.user_id")
    .select(
      "username",
      "email",
      "password",
      "firstName",
      "lastName",
      "isAdmin",
      "created_at",
      "updated_at",
      "user_id",
      "houseNumber",
      "streetName",
      "city",
      "zip",
      "state",
      "country",
      "phone"
    )
    .where({ user_id: id });
}

function findByUsername(username) {
  return db("user").where({ username });
}

function addUser(data) {
  return db("user")
    .insert(data, "id")
    .then((ids) => {
      const [id] = ids;
      return findUserId(id).select("id", "username", "firstName", "lastName");
    });
}

function findUserId(id) {
  return db("user").where({ id }).first();
}
