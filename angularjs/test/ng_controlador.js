
var moduloAplicacion = angular.module("miAppClientes", [])

function ControladorSimple($scope) {
    $scope.tituloDiv="App Gestion Clientes";
    $scope.listadoClientes=[
        {nombre:'juan', ciudad:'cadiz'},
        {nombre:'pedro', ciudad:'madrid'},
        {nombre:'fernandito', ciudad:'andalucia'},
        {nombre:'monchito', ciudad:'paris'},
    ]
}

function ControladorSimple2($scope) {
    $scope.tituloDiv="App Gestion Facturas";
    $scope.listadoClientes=[
        {nombre:'champa', ciudad:'cadiz'},
        {nombre:'goku', ciudad:'madrid'},
        {nombre:'gohan', ciudad:'andalucia'},
        {nombre:'milk', ciudad:'paris'},
    ]
}

moduloAplicacion.controller("controladorSimple", ControladorSimple)
moduloAplicacion.controller("controladorSimpleDos", ControladorSimple2)