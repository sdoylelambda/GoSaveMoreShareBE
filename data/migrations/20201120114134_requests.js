exports.up = function (knex) {
  return knex.schema.createTable('requests', (requests) => {
    requests.increments().primary()
    address.string('productName', 256)
    address.string('description', 256)
    address.string('comments', 256)
    address.integer('firstName', 256).notNullable()
    address.string('lastName', 256).notNullable()
    address.string('email', 256).notNullable()
    address.string('phone', 30).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('requests')
}
