var ZipCode = require(`${__dirname}/../models/zipCode.js`),
         fs = require('fs')

var zipCodeController = {
  getIndex : function(req,res){
    // stubbed to provide dummy zipCode geoJSON for now
    fs.readFile(`${__dirname}/../bin/Zip_Codes.geojson`,'utf-8',function(err,content){
      res.send(content)
    })
  }
}

module.exports = zipCodeController
