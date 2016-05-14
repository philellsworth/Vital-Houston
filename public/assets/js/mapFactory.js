;(function(){
  'use strict'
  angular.module('vitalApp')
          .factory('mapFactory', mapFactory)

  function mapFactory(){
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
      markers.forEach(function(user){
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

    return mf

  }
}())
