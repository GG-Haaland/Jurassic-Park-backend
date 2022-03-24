const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is Jurassic Park!'))

router.get('/dinos', controllers.getAllDinos)

router.get('/dinos/:id', controllers.getDinoById)

module.exports = router;