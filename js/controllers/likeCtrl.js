angular.module('appmain') // definimos un Controlador
.controller('likeCtrl',['$scope', function($scope){ 
    console.log('Iniciando LikeCtrl');
    
    $scope.contador=0; 
    $scope.like = function(){
        $scope.contador = $scope.contador + 1;
    }
}]);

