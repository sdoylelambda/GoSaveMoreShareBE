exports.up = function (knex) {
  return knex.schema
    .createTable('user', (user) => {
      user.increments().primary()
      user.string('username', 256).notNullable().unique()
      user.string('email', 256).notNullable().unique()
      user.string('password', 256).notNullable()
      user.string('firstName', 256).notNullable()
      user.string('lastName', 256).notNullable()
      user.boolean('isAdmin', false).notNullable()
      user.timestamps(true, true)
    })
    .createTable('address', (address) => {
      address.increments().primary()
      address
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      address.string('houseNumber', 256).notNullable()
      address.string('streetName', 256).notNullable()
      address.string('city', 256).notNullable()
      address.integer('zip', 256).notNullable()
      address.string('state', 256).notNullable()
      address.string('country', 256).notNullable()
      address.string('phone', 30).notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('address')
    .dropTableIfExists('user')
    .dropTableIfExists('reviews') // to delete review duplicate, may need to modify if reviews are added to project.
}
