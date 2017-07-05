'use strict';

// scope use
angular.module('ejemploApp').controller('scopeCtrl', ['$scope', function($scope){
    $scope.nombre = 'John Doe';
    $scope.saludar = function() {
        alert(`Hola, buenas noches! ${$scope.nombre}`);
    }
    $scope.contar = function() {
        alert('1,2,3....');
    }
}]);
//////////////////////////////////////////////////////////////////////////////////

// scope $watch use
angular.module('ejemploApp').controller('watchCtrl', ['$scope', function($scope){
    
    $scope.$watch(
        function() {
            return $scope.valorCheckbox;
        },
        function(valorNuevo, valorAntiguo) {
            if (valorNuevo !== undefined && valorAntiguo !== undefined) {
                alert(`valor nuevo: ${valorNuevo} || valor antiguo ${valorAntiguo}`);
            }
        }
    );

}]);
//////////////////////////////////////////////////////////////////////////////////

// scope $broadcast(downwards hierarchy) and $emit(upwards hierarchy) use
angular.module('ejemploApp').controller('controladorA', ['$scope', function($scope){
    
    $scope.haciaAbajo = function() {
        $scope.$broadcast('eventoHaciaAbajo', 'BROADCAST')
    }

    $scope.$on('eventoHaciaArriba', function(event, data){
        alert(data);
    })

}]);

angular.module('ejemploApp').controller('controladorB', ['$scope', function($scope){
    
    $scope.$on('eventoHaciaAbajo', function(event, data){
        alert(data);
    })

    $scope.haciaArriba = function () {
        $scope.$emit('eventoHaciaArriba', 'EMIT')
    }

}]);
//////////////////////////////////////////////////////////////////////////////////