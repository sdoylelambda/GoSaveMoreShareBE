const db = require('../data/db-config')

module.exports = {
  getAllRequests,
  requestProduct,
}

function requestProduct(product) {
  return db('requests').insert(product)
}

function getAllRequests() {
  return db('requests')
}
