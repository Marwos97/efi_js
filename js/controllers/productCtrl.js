angular.module('appmain') // definimos un Controlador

.controller('control_producto',['$scope','producto_service', function($scope, produc_service){ // definimos un controlador
    console.log('Iniciando producto_service');
    $scope.ListProducts = 'Lista Vacia';
    $scope.buscado = 'Lista Vacia';
    $scope.agregar= function(){
        let product = {
            codigo: $scope.codigo,
            nombre: $scope.nombre,
            detalle: $scope.detalle,
            precio: $scope.precio,
            stock_min: $scope.stock_min,
            stock_max: $scope.stock_max,
            is_active: $scope.is_active
        }
        produc_service.addProducto(product);
    }

    $scope.obtener= function(){
        $scope.ListProducts = produc_service.getProductos();       
    }

    $scope.delete=function(){
        produc_service.deleteProducto($scope.nombre_delete);
    }

    $scope.buscar=function(){
        $scope.buscado = produc_service.buscarProducto($scope.nombre_buscar);
    }

    console.log('Iniciando controlador ', produc_service.getProductos());

}])
