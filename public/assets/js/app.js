;(function(){
  'use strict'
  angular.module('vitalApp',[])
          .controller('mapController',['$http','mapFactory',mapController])

  function mapController($http,mapFactory){
    var mc = this
    mc.layers = [{
      type     : "Property Value Deltas",
      propName : "propertyValueDeltas",
      enabled  : true,
      polygons : []
    }]

    navigator.geolocation.getCurrentPosition(function(position){
      mapFactory.buildMap(mc,position.coords)
      mapFactory.placePolygons(mc)
    })

  }
})()
