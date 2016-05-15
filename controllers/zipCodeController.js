var Zipcode = require(`${__dirname}/../models/zipCode.js`),
       Park = require(`${__dirname}/../models/park.js`),
         fs = require('fs')

var zipCodeController = {
  getIndex : function(req,res){
    Zipcode.find({},function(err,zips){
      if(!err) res.json(zips)
      if(err){
        console.log(`index route - db error: ${err}`)
        res.json({message: "index route - db error"})
      }
    })
  },
  getRange : function(req,res){
    
  },
  getParks : function(req,res){
    Park.find({},function(err,parks){
      if(!err) res.json(parks)
    })
  }
}

module.exports = zipCodeController
