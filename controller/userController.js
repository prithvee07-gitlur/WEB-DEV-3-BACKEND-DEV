const userModel = require('../model/userModel');

const getAllUser=(req,res)=>{
    const user=userModel.getAll();
    res.json(user);
}

const getUserById=(req,res)=>{
    const id=parseInt(req.params.id);
    const user = userModel.getById(id);
    if (user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message : 'User not found'});
    }
}

const createUser = (req,res)=>{
    const newUser = req.body;
    userModel.save(newUser);
    res.status(201).json(newUser);
}

const updatedUser = (req,res) =>{
    const id = parseInt(req.params.id);
    const updatedUser=req.body;
    userModel.update(id,updatedUser);
    res.status(200).json({message: "User updated successfully"});
}

const deleteUserbyId=(req,res)=>{
    const id = parseInt(req.params.id);
    userModel .deleteUser(id);
    res.status(200).json({message: "User deleted successfully"});
}

module.exports={
    getAllUser,
    getUserById,
    createUser,
    updatedUser,
    deleteUserbyId
}