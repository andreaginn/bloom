const db = require('../config/connection');
const {User, Action} = require('../models');
const actionSeeds = require('./actionSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async()=>{
    try{
        await Action.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        await Action.create(actionSeeds);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Seed Complete');
    process.exit(0)
})