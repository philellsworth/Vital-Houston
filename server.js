var bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
       express = require('express'),
        logger = require('morgan'),
          http = require('http'),
            fs = require('fs'),

           app = express(),
          port = process.env.PORT || 3000,

          dbURL = 'mongodb://localhost:27017/vital',
 buildingRoutes = require(__dirname + '/routes/buildingRoutes.js')

 // DB Initialization
 mongoose.connect(dbURL, function(err){
   if(err)  console.log("!- Failed to connect to buildings db.")
   if(!err) console.log("-- Connected to buildings db.")
 })

 // Standard Middleware
 app.use(logger('dev'))
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 // Configure Routing
 // currently lack public files to expose on static server
 app.use(express.static(`${__dirname}/public`))
 app.use('/vital-api/v1/', buildingRoutes)

 var httpServer = http.createServer(app)
 // Set up Listener
 httpServer.listen(port, function(err){
   if(!err){
     console.log("-- Server Running on Port:", port)
   } else {
     console.log("!- Server Not Running:")
     console.log(err)
   }
 })
