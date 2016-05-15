;(function(){
  'use strict'
  angular.module('vitalApp',[])
          .controller('mapController',['$http','mapFactory',mapController])

  function mapController($http,mapFactory){
    var mc = this
    mc.layerProperties = []
    mc.layers = {}

    mc.toggleEnabled = function(layer){
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
      $http.get('/vital-api/v1/metadata')
            .then(function(metaData){
              mc.layerProperties = metaData.data
              mc.layerProperties.forEach(function(layer){
                if(layer.enabled && layer.dataTypes.indexOf("polygons")!==-1){
                    mapFactory.placePolygons(mc,layer)
                }else if(layer.enabled && layer.dataTypes.indexOf("markers")!==-1){
                    mapFactory.placeMarkers(mc,layer)
                }
              })
            })
    })
  }
})()
