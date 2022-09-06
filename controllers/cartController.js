const router = require("express").Router();
const CartModel = require("../models/cartModel");

router.get("/", (req, res) => {
  CartModel.findCart()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

router.get("/:id", (req, res) => {
  let userId = req.params.id;
  CartModel.findByUserId(userId)
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    let saveItem = await CartModel.addCart(data);
    console.log("checking on the save item", saveItem);

    res.status(200).json(saveItem);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

router.put("/:id", (req, res) => {
  let { id } = req.params;
  let data = req.body;
  CartModel.editCart(id, data)
    .then((cart) => res.status(200).json({ cart }))
    .catch((err) => res.status(400).json({ err: err.message }));
});

module.exports = router;
