const { Schema, model } = require('mongoose');


//Actions will be created by 100% seed data and then selected through form
const actionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        units: {
            type: String,
            required: true,
        },
        carbonPerUnit:{
            type: Number,
            required: true,
        },
        category:{
            type: String,
            require: true,
        }
    }
)


const Action = model('Action', actionSchema);
module.exports = Action;