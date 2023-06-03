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
    foodContribution: {
        type: Number,
        default: 0,
    }
})

// impactSchema.virtual('formattedDate').get(function () {
//     return this.date.toLocaleString();
//   });

module.exports = impactSchema