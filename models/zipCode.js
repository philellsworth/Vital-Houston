var mongoose = require('mongoose'),
      Schema = require('mongoose').Schema

zipCodeSchema = new Schema({
  zipCode       : {type:Number, required:true},
  geoJSON       : {type:String},
  // array member - one element per year
  buildingStats : [{
    year        : {type:Number, required:true},
    totalNumber : {type:Number, required:true},
    meanValue   : {type:Number, required:true},
    medianValue : {type:Number, required:true},
    firstQuartile : {type:Number, required:true},
    thirdQuartile : {type:Number, required:true},
    annualDelta : {type:Number, required:true},
    // one element per type of building
    buildingTypes : [{
      buildingType : {type:String, required:true},
      number       : {type:Number, required:true}
    }]
  }]
})

module.exports = mongoose.model('ZipCode',zipCodeSchema)
