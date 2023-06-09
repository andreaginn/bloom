const { Schema, model } = require('mongoose');

const goalSchema = new Schema({
    dateCreated: {
        type: Date,
        required: true,
    },
    goalText: {
        type: String,
        required:true,
    },
})

module.exports = goalSchema