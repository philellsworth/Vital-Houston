var mongoose = require('mongoose'),
      Schema = mongoose.Schema

parkSchema = new Schema({
  geoJSON : {type:String}
})

module.exports = mongoose.model('Park',parkSchema)
