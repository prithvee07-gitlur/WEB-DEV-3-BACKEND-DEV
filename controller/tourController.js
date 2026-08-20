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
    const tour = tourModel.getById(id);
    if (tour){
        res.status(200).json(tour);
    }else{
        res.status(404).json({message : 'Tour not found'});
    }
}

module.exports={
    getAllTour,
    getTourById
}