const router = require('express').Router()
const ProductModel = require('../models/productsModel')

// category route
router.get('/category', (req, res) => {
  ProductModel.getCategory()
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// tag route
router.get('/tag', (req, res) => {
  ProductModel.getTag()
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json({ err: err.message }))
})

// product route
router.get('/', (req, res) => {
  ProductModel.getProduct()
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.get('/:id', (req, res) => {
  let id = req.params
  ProductModel.getProductById(id)
    .then((product) => {
      res.status(200).json(product)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.get('/:productName', (req, res) => {
  let productName = req.params
  console.log('productName===>', productName)
  ProductModel.getProductByName(productName.toLowerCase())
    .then((product) => {
      res.status(200).json(product)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.post('/', (req, res) => {
  const data = req.body

  ProductModel.addProduct(data)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.put('/:id', async (req, res) => {
  try {
    let id = req.params
    const changes = req.body

    let searchResult = await ProductModel.findById(id)
    if (!searchResult) {
      res.status(404).json({ message: 'That product does not exist.' })
    } else {
      const updated = await ProductModel.editProduct(searchResult, changes)
      res.status(200).json({ updated })
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:id', (req, res) => {
  const id = req.params
  ProductModel.deleteProduct(id)
    .then(() => res.status(200).json({ msg: 'Product deleted' }))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
