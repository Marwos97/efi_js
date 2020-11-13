angular.module('appmain') // definimos un Controlador

.controller('control_login',['$scope', '$location', 'login_service', function($scope, $location,  login_service){ // definimos un controlador
    console.log('Iniciando login_service');
    $scope.ListUsers = 'Lista Vacia';
    $scope.ListUsers = login_service.getUsuarios();
    $current_user = "sin current";
    $current_user = login_service.getCurrentUser();
    console.log($current_user)
    $n = $scope.ListUsers.length;
    $scope.agregarUsuario= function(){
        let user = {
            id: $n+1,
            username: $scope.username,
            password: $scope.password
        }
        console.log("quiero agregar usuario")
        login_service.addUsuario(user);
        $location.path("/login")
    }

    $scope.loguear= function(){
        $scope.ListUsers = login_service.getUsuarios();
        console.log($scope.ListUsers.length)
        for (let i = 0; i<$scope.ListUsers.length; i++){
            if ($scope.username == $scope.ListUsers[i].username && $scope.password == $scope.ListUsers[i].password && $scope.username != "admin"){
                $current = {id: $scope.ListUsers[i].id, username: $scope.ListUsers[i].username};
                login_service.setCurrentUser($current);
                $location.path('/home');
            }else if($scope.username == $scope.ListUsers[i].username && $scope.username == "admin" &&  $scope.ListUsers[i].id == 1 && $scope.password == $scope.ListUsers[i].password){
                $current = {id: $scope.ListUsers[i].id, username: $scope.ListUsers[i].username};
                login_service.setCurrentUser($current);
                $location.path('/admin');
            }
        }     
    }

    $scope.getAllUsers = function(){
        $scope.ListUsers = login_service.getUsuarios();
    }

    $scope.logout = function(){
        $current_user = {id:0, username:0};
        login_service.setCurrentUser($current_user);
        $location.path('/login');
    }
}])
