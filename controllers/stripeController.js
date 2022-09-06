const Stripe = require('stripe')
const router = require('express').Router()

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`)

router.post('/', async (req, res) => {
  try {
    const { amount } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    })
    res.status(200).send(paymentIntent.client_secret)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
})

module.exports = router
