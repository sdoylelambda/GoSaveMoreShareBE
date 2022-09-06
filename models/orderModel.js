const db = require("../data/db-config");

module.exports = {
  getOrders,
  addOrder,
};

async function getCart() {
  try {
    let cart = db("cart")
      .select("id", "product_id", "user_id")
      .where({ isPaid: 0 });
    return cart;
  } catch (err) {
    return err;
  }
}

async function addOrder(item) {
  try {
    let order = db("order").insert(item);
    return order;
  } catch (err) {}
}

async function getOrders(id) {
  try {
    return await db("order")
      .join("cart", "order.cart_id", "cart.id")
      .join("product", "product.id", "=", "cart.product_id")
      .where({ cart_id: id, isPaid: 0 });
  } catch (err) {
    return err;
  }
}
