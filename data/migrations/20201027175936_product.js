exports.up = function (knex) {
  return knex.schema
    .createTable("category", (category) => {
      category.increments().primary();
      category.text("category");
    })

    .createTable("product", (product) => {
      product.increments().primary();

      // foreign key for category
      product
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      product.text("productName").notNullable().unique();
      product.text("image").notNullable();
      product.text("brand").notNullable();
      product.integer("price").notNullable();
      product.text("shortDescription", 512).notNullable();
      product.text("description", 1024).notNullable();
      product.integer("ratings").notNullable();
      product.integer("stock").notNullable();

      product.timestamps(true, true);
    })
    .createTable("tag", (tag) => {
      tag.increments().primary();

      tag
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("product")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tag.string("tag", 100);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("product")
    .dropTableIfExists("tag")
    .dropTableIfExists("category");
};
