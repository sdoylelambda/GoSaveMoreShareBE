const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const productsRouter = require('./controllers/productController')
const adminRouter = require('./controllers/adminController')
const authRouter = require('./controllers/authController.js')
const cartRouter = require('./controllers/cartController.js')
const orderRouter = require('./controllers/orderController')
const requestController = require('./controllers/requestController')
const stripeRouter = require('./controllers/stripeController')
const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

// Routes
server.use('/products', productsRouter)
server.use('/admin', adminRouter)
server.use('/auth', authRouter)
server.use('/cart', cartRouter)
server.use('/requests', requestController)
server.use('/orders', orderRouter)
server.use('/checkout', stripeRouter)
server.get('/', (req, res) => {
  res.json({ api: 'Backend is running' })
})

module.exports = server
