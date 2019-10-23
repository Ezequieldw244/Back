const mongoose = require('mongoose');
const {Schema} = mongoose;

const agencySchema = new Schema({
    Name: {type: String},
    heroes: [{ 
        HeroName: {type: String},
        Name: {type: String},
        Moves: [{type: String}]
    }]
});

module.exports = mongoose.model('Agency', agencySchema);