'use strict';
angular.module('peliSeriesApp')
       .controller('navCtrl',['$scope', '$routeSegment', function($scope, $routeSegment) {

    $scope.rutaEsPeliculas = function() {
        return $routeSegment.startsWith('peliculas');
    }

    $scope.rutaEsSeries = function () {
        return $routeSegment.startsWith('series');
    }

}])