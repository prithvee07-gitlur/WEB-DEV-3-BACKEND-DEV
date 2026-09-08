// importing the modules
const tourModel = require('../model/tourModel');

// service code means writing some buissness logic 
// we want to hook the function below with some route that's why we need routing configuration 
const getAllTour=(req,res)=>{
    const tours=tourModel.getAll();
    res.json(tours);
}

const getTourById=(req,res)=>{
    const id=parseInt(req.params.id);
    // parseInt takes a string, reads digits from the start,
    // return an integers (no decimal) and returns NaN if 
    // it can't find a valid number at the start
    const tour = tourModel.getById(id);
    if (tour){
        res.status(200).json(tour);
    }else{
        res.status(404).json({message : 'Tour not found'});
    }
}

const createTour = (req,res)=>{
    const newTour = req.body;
    tourModel.save(newTour);
    res.status(201).json(newTour);
}

// update controller
const updatedTour = (req,res) =>{
    const id = parseInt(req.params.id);
    const updatedTour=req.body;
    tourModel.update(id,updatedTour);
    res.status(200).json({message: "Tour updated successfully"});
}

// delete controller
const deleteTourbyId=(req,res)=>{
    const id = parseInt(req.params.id);
    tourModel.deleteTour(id);
    res.status(200).json({message: "Tour deleted successfully"});
}

module.exports={
    getAllTour,
    getTourById,
    createTour,
    updatedTour,
    deleteTourbyId
}