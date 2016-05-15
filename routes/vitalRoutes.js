var        vitalRouter = require('express').Router(),
    buildingController = require(`${__dirname}/../controllers/buildingController.js`),
     zipCodeController = require(`${__dirname}/../controllers/zipCodeController.js`)

vitalRouter.route('/buildings')
              .get(buildingController.getIndex)
vitalRouter.route('/zip-codes')
              .get(zipCodeController.getIndex)

module.exports = vitalRouter
