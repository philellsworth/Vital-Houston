var Building = require(`${__dirname}/../models/building.js`)

var buildingController = {
  getIndex : function(req,res){
    Building.find({},function(err,buildings){
      if(!err) res.json(buildings)
      if(err){
        console.log(`index route - db error: ${err}`)
        res.json({message: "index route - db error"})
      }
    })
  }
}

module.exports = buildingController
