var bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
       express = require('express'),
        logger = require('morgan'),
          http = require('http'),
            fs = require('fs'),

           app = express(),
          port = process.env.PORT || 3000,

          dbURL = 'mongodb://localhost:27017/vital',
    vitalRoutes = require(__dirname + '/routes/vitalRoutes.js')

 // DB Initialization
 mongoose.connect(dbURL, function(err){
   if(err)  console.log("!- Failed to connect to vital db.")
   if(!err) console.log("-- Connected to vital db.")
 })

 // Standard Middleware
 app.use(logger('dev'))
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 // Configure Routing
 // currently lack public files to expose on static server
 app.use(express.static(`${__dirname}/public`))
 app.use('/vital-api/v1/', vitalRoutes)

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
