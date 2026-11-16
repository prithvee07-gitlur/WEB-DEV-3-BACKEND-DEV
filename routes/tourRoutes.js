const express = require('express');
const router = express.Router();

const tourController = require('../controller/tourController');

// GET all tours
router.get('/tours', tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', tourController.getTourById);

// CREATE tour
router.post('/tours', tourController.saveTours);

// UPDATE tour
router.put('/tours/:id', tourController.updateTour);

// DELETE tour
router.delete('/tours/:id', tourController.deleteTourbyID);

module.exports = router;