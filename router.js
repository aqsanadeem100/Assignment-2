const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/',services.homeRoutes)
route.get('/add-order',services.add_order)
route.get('/update-order', services.update_order)

//API
route.post('/api/orders',controller.create)
route.get('/api/orders',controller.find)
route.put('/api/orders/:id',controller.update)
route.delete('/api/orders/:id',controller.delete)

module.exports = route
