exports.up = function (knex) {
  return knex.schema.createTable("cart", (cart) => {
    // primary key
    cart.increments().primary();

    // user_id foreign key
    cart
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // product_id foreign key
    cart
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("product")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    cart.boolean("savedForLater", true);
    cart.integer("quantity").notNullable();
    cart.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart");
};
