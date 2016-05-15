;(function(){
  'use strict'
  angular.module('vitalApp')
          .factory('mapFactory', ['$http',mapFactory])

  function mapFactory($http){
    var mf = {}

    mf.buildMap = function(scope,coords){
      scope.map = new google.maps.Map(document.getElementById('map'),
                                    {
                                      center : {
                                                  lat : coords.latitude,
                                                  lng : coords.longitude
                                                },
                                      zoom   : 12
                                    })
    }
    mf.placeMarkers = function(scope,markers){
      markers.forEach(function(marker){
        var marker = new google.maps.Marker({
          position : {
                        lat : user.location.coordinates[1],
                        lng : user.location.coordinates[0]
                      },
          map      : scope.map
        })
        var info = new google.maps.InfoWindow({})
        info.setContent(mf.infoWindowBuilder(user))
        info.open(scope.map,marker)
      })
    }

    mf.placePolygons = function(scope,layers){
      $http.get('/vital-api/v1/zip-codes')
            .then(function(response){
              scope.layers.propertyValueDeltas = []
              var polygons = response.data
              polygons.forEach(function(polygon,index){
                // find degree of nesting that contains the coordinate arrays
                var gjCoords
                if(typeof JSON.parse(polygon.geoJSON).coordinates[0][0][0] !== "object"){
                  gjCoords = JSON.parse(polygon.geoJSON).coordinates[0]
                }else if(typeof JSON.parse(polygon.geoJSON).coordinates[0][0][0][0] !== "object"){
                  gjCoords = JSON.parse(polygon.geoJSON).coordinates[0][0]
                }
                // convert geoJSON coordinates to google polygon format
                var googCoords = gjCoords.map(function(coord){
                  return {lat:coord[1],lng:coord[0]}
                })
                // build polygon and assign to scope.map
                var newPolygon = new google.maps.Polygon({
                  paths     : googCoords,
                  fillColor : '#2ecc71',
                  strokeWeight : 0.8,
                  zipcode : polygon.zipCode
                })
                newPolygon.setMap(scope.map)
                scope.layers.propertyValueDeltas.push(newPolygon)
              })
            })
    }

    return mf

  }
}())
