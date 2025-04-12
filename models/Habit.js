const mongoose = require('mongoose');   
const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now   
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    lastDone: {
        type: Date,
        default: Date.now
    },
    days: {
        type: [String],
        default: 1
    },
    staredAt: {
        type: Date,
        default: Date.now
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}); 

module.exports = mongoose.model('Habit', habitSchema);  