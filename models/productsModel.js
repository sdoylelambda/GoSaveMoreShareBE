const db = require('../data/db-config')

module.exports = {
  getProductById,
  getProductByName,
  getProduct,
  getCategory,
  getTag,
  addProduct,
  deleteProduct,
  editProduct,
}

function getCategory() {
  return db('category').select('id', 'name')
}

function getTag() {
  return db('tag')
}

function getProduct() {
  return (
    db('product')
      // .join("tag")
      // .join("category")
      .select(
        // "product.id",
        // "product.productName",
        // "product.image",
        // "product.brand",
        // "product.price",
        // "product.shortDescription",
        // "product.description",
        // "product.ratings",
        // "product.stock",
        // "product.created_at",
        // "product.updated_at",
        // "tag.tag",
        // "category.category"
        '*'
      )
  )
}

function getProductById(id) {
  return db('product').where(id).first()
}

function getProductByName(productName) {
  return db('product').where(productName).first()
}

function addProduct(newProduct) {
  return db('product').insert(newProduct)
}

function editProduct(id, data) {
  return db('id').where(id).update(data) // TBC
}

function deleteProduct(product) {
  return db('product').where(product).del() // where id=id
}
