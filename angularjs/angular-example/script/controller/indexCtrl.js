'use strict';
angular.module('ejemploApp').controller('indexCtrl', ['$scope', function($scope){

    $scope.nombre = 'John Doe';

    $scope.saludar = function() {
        alert('Hola, buenas noches!');
    }

    $scope.contar = function() {
        alert('1,2,3....');
    }

}]);