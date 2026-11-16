const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectDB() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
// connectDB();

module.exports = connectDB;