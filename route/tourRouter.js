// importing all the things we need
const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/',tourController.getAllTour);
router.get('/:id', tourController.getTourById);
router.post('/', tourController.createTour);
router.put('/:id', tourController.updatedTour);
router.delete('/:id',tourController.deleteTourbyId)
module.exports = router;

// after this we will go to our entry point i.e. index.js