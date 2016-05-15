var mongoose = require('mongoose'),
      Schema = mongoose.Schema

metadataSchema = new Schema({
  type     : {type:String, required:true},
  propName : {type:String, required:true},
  endPoint : {type:String, required:true},
  dataTypes: [{type:String, required:true},],
  enabled  : {type:Boolean, required:true},
})

module.exports = mongoose.model('Metadata',metadataSchema)
