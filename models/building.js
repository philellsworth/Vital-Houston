var mongoose = require('mongoose'),
      Schema = mongoose.Schema

buildingSchema = new Schema({
  address : {
    streetNumber : {type:Number, required:true},
    streetName   : {type:String, required:true},
    city         : {type:String, required:true},
    zip          : {type:String, required:true}
  },
  location : {
                type        : {type:String, default:'Point'},
                coordinates : [{type:Number}]
  },
  taxValues : [{
    year        : {type:Number, required:true},
    grossValue  : {type:Number, required:true},
    taxedValue  : {type:Number, required:true},
    valueDelta  : {type:Number, required:true},
    annualDelta : {type:Number, required:true}
  }]
})

buildingSchema.index({location:'2dsphere'})

module.exports = mongoose.model('building',buildingSchema)
