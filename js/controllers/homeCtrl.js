angular.module('appmain') // definimos un Controlador
.controller('homeCtrl',['$scope', function($scope){ 
    console.log('Iniciando homeCtrl');
    $scope.saludo='Bienvenidos!.';
}]);

