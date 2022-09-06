const router = require("express").Router();
const OrderModel = require("../models/orderModel");

router.post("/", (req, res) => {
  let data = req.body;

  OrderModel.addOrder(data)
    .then((order) => res.status(200).json({ message: `added order ${order}` }))
    .catch((err) => res.status(400).json());
});

// user id
router.get("/:id", (req, res) => {
  let { id } = req.params;
  OrderModel.getOrders(id)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => res.status(400).json({ err }));
});

module.exports = router;
