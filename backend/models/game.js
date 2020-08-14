const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Game_Schema  =  mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    name :{
        type: String,
        required:true
    },
    description :{
        type: String,
        required:true
    },
    link :{
        type: String,
        required:true
    },
    image:{
        type: String,
        required :true
    },
});

const Game = mongoose.model('Game',Game_Schema);

module.exports = Game;