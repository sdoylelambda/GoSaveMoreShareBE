exports.up = function (knex) {
  return knex.schema
    .createTable("order", (order) => {
      // primary key
      order.increments().primary();

      // // foreign key for user
      order
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // foreign key for address
      order
        .integer("address_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("address")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      order.string("status", 100);
      order.integer("amount");
      order.timestamps(true, true);
    })
    .createTable("orderItem", (orderItem) => {
      orderItem.increments().primary();
      // order_id foreign key
      orderItem
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("order")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      // product_id foreign key
      orderItem
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("product")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      orderItem.integer("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orderItem").dropTableIfExists("order");
};
