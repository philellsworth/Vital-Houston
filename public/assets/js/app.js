;(function(){
  'use strict'
  angular.module('vitalApp',[])
          .controller('mapController',['$http','mapFactory',mapController])

  function mapController($http,mapFactory){
    var mc = this
    mc.layerProperties = [{
      type     : "Property Value Deltas",
      propName : "propertyValueDeltas",
      endPoint : '/vital-api/v1/zip-codes',
      enabled  : true
    }]
    mc.layers = {}

    mc.toggleEnabled = function(layer){
      console.log(layer)
      if(layer.enabled){
        mc.layers[layer.propName].forEach(function(mapObj){
          mapObj.setMap(mc.map)
        })
      }else{
        mc.layers[layer.propName].forEach(function(mapObj){
          mapObj.setMap(null)
        })
      }
    }

    navigator.geolocation.getCurrentPosition(function(position){
      mapFactory.buildMap(mc,position.coords)
      mapFactory.placePolygons(mc,mc.layerProperties)
    })

  }
})()
