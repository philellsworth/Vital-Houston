var mongoose = require('mongoose'),
      Schema = mongoose.Schema

buildingSchema = new Schema({
  address : {
    streetNumber : {type:Number, required:true},
    streetName   : {type:String, required:true},
    city         : {type:String, required:true},
    zip          : {type:String, required:true}
  },
  buildingType  : {type:String, required:true},
  taxValues : [{
    year        : {type:Number, required:true},
    grossValue  : {type:Number, required:true},
    taxedValue  : {type:Number, required:true},
    valueDelta  : {type:Number, required:true},
    annualDelta : {type:Number, required:true}
  }]
})

buildingSchema.index({location:'2dsphere'})

module.exports = mongoose.model('Building',buildingSchema)
