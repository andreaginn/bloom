const { Schema, model } = require('mongoose');

//Impact schema will store the total contribution for each category for each days date
const impactSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    travelContribution: {
        type: Number,
        default: 0,
    },
    energyContribution: {
        type: Number,
        default: 0,
    },
    foodWasteContribution: {
        type: Number,
        default: 0,
    }
})

module.exports = impactSchema