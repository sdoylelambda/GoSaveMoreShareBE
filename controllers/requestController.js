const router = require('express').Router()
const RequestModel = require('../models/requestModel')

router.get('/', (req, res) => {
  RequestModel.getAllRequests()
    .then((request) => res.status(200).json(request))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.post('/', (req, res) => {
  const data = req.body

  RequestModel.requestProduct(data)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(200).json({ err: err.message }))
})

module.exports = router
