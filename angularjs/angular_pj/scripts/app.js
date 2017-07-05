'use strict';
// define imports
let app = angular.module('peliSeriesApp', ['ngRoute','route-segment','view-segment']);

// configurate
app.config(['$routeSegmentProvider','$locationProvider', function($routeSegmentProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeSegmentProvider.when('/peliculas', 'peliculas');
    $routeSegmentProvider.when('/series', 'series');

    $routeSegmentProvider.segment('peliculas', {
        controller:'peliculasCtrl',
        templateUrl:'views/peliculas.html'
    })
    
    $routeSegmentProvider.segment('series', {
        controller:'seriesCtrl',
        templateUrl:'views/series.html'
    })
  
}]);