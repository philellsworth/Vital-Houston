var buildingRouter     = require('express').Router(),
    buildingController = require(`${__dirname}/../controllers/buildingController.js`)

buildingRouter.route('/buildings')
                .get(buildingController.getIndex)

module.exports = buildingRouter
