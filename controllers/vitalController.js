var Metadata = require(`${__dirname}/../models/metadata.js`)

var vitalController = {
  getIndex : function(req,res){
    Metadata.find({},function(err,data){
      if(!err) res.json(data)
    })
  }
}

module.exports = vitalController
