angular.module('appmain') // definimos un Controlador

.controller('control_login',['$scope', '$location', 'login_service', function($scope, $location,  login_service){ // definimos un controlador
    console.log('Iniciando login_service');
    $scope.ListUsers = 'Lista Vacia';

    $scope.agregarUsuario= function(){
        let user = {
            username: $scope.username,
            password: $scope.password
        }
        console.log("quiero agregar usuario")
        login_service.addUsuario(user);
    }

    $scope.loguear= function(){
        $scope.ListUsers = login_service.getUsuarios();
        console.log($scope.ListUsers.length)
        if ($scope.username == "admin"&& $scope.password == "admin"){
            console.log("es el admin")
            $location.path("/admin")
        }else{
            for (let i = 0; i<$scope.ListUsers.length; i++){
                if ($scope.username == $scope.ListUsers[i].username && $scope.password == $scope.ListUsers[i].password){
                    console.log("es usuario");
                    $location.path('/productos');
                }
            }
        }
    }

    $scope.getAllUsers = function(){
        $scope.ListUsers = login_service.getUsuarios();
    }
}])
