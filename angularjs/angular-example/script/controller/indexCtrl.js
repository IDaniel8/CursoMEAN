'use strict';
angular.module('ejemploApp').controller('scopeCtrl', ['$scope', function($scope){
    $scope.nombre = 'John Doe';
    $scope.saludar = function() {
        alert('Hola, buenas noches!');
    }
    $scope.contar = function() {
        alert('1,2,3....');
    }
}]);

angular.module('ejemploApp').controller('watchCtrl', ['$scope', function($scope){
    
    $scope.$watch(
        function() {
            return $scope.valorCheckbox;
        },
        function(valorNuevo, valorAntiguo) {
            alert(`valor nuevo: ${valorNuevo} || valor antiguo ${valorAntiguo}`);
        }
    );

}]);