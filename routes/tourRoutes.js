const express = require('express');
const tourRouter = express.Router();

const tourController = require('../controller/tourController');
const protect = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/roleMiddleware');
// Apply authentication middleware to all tour routes
tourRouter.use(protect);

// GET all tours
tourRouter.get('/tours', tourController.getAllTours);

// GET tours by search query
tourRouter.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
tourRouter.get('/tours/:id', tourController.getTourById);

// CREATE tour
tourRouter.post('/tours',protect,restrictTo('admin', 'superadmin','user'), tourController.saveTours);

// UPDATE tour
tourRouter.put('/tours/:id', protect, tourController.updateTour);

// DELETE tour
tourRouter.delete('/tours/:id', protect, tourController.deleteTourbyID);

module.exports = tourRouter;