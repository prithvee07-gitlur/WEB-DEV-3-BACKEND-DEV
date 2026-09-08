const notes = require("../model/db")

const getNotes = (req,res) =>{
    res.status(200).send(notes)
}

module.exports=getNotes

// pehle db.js banaya then controller me use kiya hai ise 