// title : string
// destination : string
// decription : string
// price : number
// durationDays : number
// availableSeats : number
// startDate : date
// image : array of strings
// rating : number
// isActive : boolean

const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [100, "Title must be at most 100 characters long"]
    },
    destination: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    durationDays: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    image: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Tour", tourSchema);