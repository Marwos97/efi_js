angular.module('appmain') // definimos un Controlador

.controller('control_producto',['$scope', '$location','producto_service', function($scope, $location, produc_service){ // definimos un controlador
    console.log('Iniciando producto_service');
    $scope.ListProducts = '';
    $scope.buscado = '';
    $scope.ListProducts = produc_service.getProductos();
    $n = $scope.ListProducts.length
    $scope.agregar= function(){
        let product = {
            id: $n+1,
            codigo: $scope.codigo,
            nombre: $scope.nombre,
            detalle: $scope.detalle,
            precio: $scope.precio,
            stock_min: $scope.stock_min,
            stock_max: $scope.stock_max,
            is_active: $scope.is_active
        }
        produc_service.addProducto(product);
        $location.path("/admin")
    }

    $scope.obtener= function(){
        $scope.ListProducts = produc_service.getProductos();
    }

    $scope.delete=function(){
        produc_service.deleteProducto($scope.nombre_delete);
    }

    $scope.buscar=function(){
        $scope.ListProducts = [];
        $scope.ListProducts = produc_service.buscarProducto($scope.nombre_buscar);
        console.log($scope.buscado);
    }

}])