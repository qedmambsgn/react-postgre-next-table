const Router = require('express')
const router = new Router()
const purchaseRouter = require('./purchaseRouter')


router.use('/purchase', purchaseRouter)

module.exports = router