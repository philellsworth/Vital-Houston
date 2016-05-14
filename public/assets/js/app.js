;(function(){
  'use strict'
  angular.module('vitalApp',[])
          .controller('mapController',['$http','mapFactory',mapController])

  function mapController($http,mapFactory){
    var mc = this

    navigator.geolocation.getCurrentPosition(function(position){
      mapFactory.buildMap(mc,position.coords)
    })

  }
})()
