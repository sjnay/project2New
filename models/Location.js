const mongoose = require('mongoose')

const locationData = new mongoose.Schema(
    {
        city: {
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true,
            maxLength: 2
        },
        
        tripId:{
            type:Array
        }
    })

const Cities = mongoose.model('Cities', locationData)
module.exports = Cities