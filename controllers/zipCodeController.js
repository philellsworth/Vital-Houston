var Zipcode = require(`${__dirname}/../models/zipCode.js`),
         fs = require('fs')

var zipCodeController = {
  getIndex : function(req,res){
    // stubbed to provide dummy zipCode geoJSON for now
    // fs.readFile(`${__dirname}/../bin/Zip_Codes.geojson`,'utf-8',function(err,content){
    //   res.send(content)
    // })

    Zipcode.find({},function(err,zips){
      if(!err) res.json(zips)
      if(err){
        console.log(`index route - db error: ${err}`)
        res.json({message: "index route - db error"})
      }
    })

  }
}

module.exports = zipCodeController
