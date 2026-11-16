const Tour = require('../model/Tour');

// 1. Get all tours
const getAllTours = async (req, res) => {
    try {
        const tours = await Tour.find();

        res.status(200).json({
            success: true,
            count: tours.length,
            data: tours
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 2. Get tour by ID
const getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);

        if (!tour) {
            return res.status(404).json({
                message: 'Tour not found'
            });
        }

        res.status(200).json({
            success: true,
            data: tour
        });

    } catch (error) {
        res.status(400).json({
            message: 'Invalid Tour ID',
            error: error.message
        });
    }
};


// 3. Search tours by name/title
const getToursByQuery = async (req, res) => {
    try {
        const { name } = req.query;

        const tours = await Tour.find({
            title: { $regex: name || '', $options: 'i' }
        });

        res.status(200).json({
            success: true,
            count: tours.length,
            data: tours
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// 4. Create a new tour
const saveTours = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Tour created successfully',
            data: newTour
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// 5. Update an existing tour
const updateTour = async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTour) {
            return res.status(404).json({
                message: 'Tour not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Tour updated successfully',
            data: updatedTour
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// 6. Delete a tour
const deleteTourbyID = async (req, res) => {
    try {
        const deletedTour = await Tour.findByIdAndDelete(
            req.params.id
        );

        if (!deletedTour) {
            return res.status(404).json({
                message: 'Tour not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Tour deleted successfully'
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


module.exports = {
    getAllTours,
    getTourById,
    getToursByQuery,
    saveTours,
    updateTour,
    deleteTourbyID
};