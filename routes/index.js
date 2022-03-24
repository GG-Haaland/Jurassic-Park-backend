const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is Jurassic Park!'))

router.get('/dinos', controllers.getAllDinos)

router.get('/dinos/:id', controllers.getDinoById)

router.get('/rides', controllers.getAllRides)

router.get('/restaurants', controllers.getAllRestaurants)

router.get('/tickets', controllers.getTicketPrices)

module.exports = router;