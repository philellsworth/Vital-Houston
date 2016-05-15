var        vitalRouter = require('express').Router(),
    buildingController = require(`${__dirname}/../controllers/buildingController.js`),
     zipCodeController = require(`${__dirname}/../controllers/zipCodeController.js`),
       vitalController = require(`${__dirname}/../controllers/vitalController.js`)

vitalRouter.route('/metadata')
              .get(vitalController.getIndex)
vitalRouter.route('/buildings')
              .get(buildingController.getIndex)
vitalRouter.route('/zip-codes')
              .get(zipCodeController.getIndex)
vitalRouter.route('/parks')
              .get(zipCodeController.getParks)

module.exports = vitalRouter
