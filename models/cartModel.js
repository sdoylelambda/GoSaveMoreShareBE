const db = require("../data/db-config");

module.exports = {
  addCart,
  findCart,
  findByCartUserId,
  findByCartProductId,
  findByUserId,
  editCart,
};

function findCart() {
  return db("cart");
}

function findByCartUserId(id) {
  return db("cart")
    .join("product", "cart.product_id", "product.id")
    .join("user")
    .where({ user_id: id });
}
function findByCartProductId(id) {
  return db("cart")
    .join("product", "cart.product_id", "product.id")
    .where({ product_id: id });
}

function addCart(cart) {
  return db("cart").insert(cart);
}

function editCart(id, data) {
  return db("cart").where({ id }).update(data);
}

function findByUserId(id) {
  return db("cart")
    .join("product", "product.id", "cart.product_id")
    .join("user", "user.id", "cart.user_id")
    .select(
      "cart.user_id",
      "cart.product_id",
      "product.id",
      "product.productName",
      "product.category_id",
      "product.brand",
      "product.created_at",
      "product.updated_at",
      "product.shortDescription",
      "product.image",
      "product.price",
      "product.ratings",
      "cart.quantity"
    )
    .where({ user_id: id });
}
