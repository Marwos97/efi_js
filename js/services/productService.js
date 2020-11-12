angular.module('appmain') // obtenemos la referencia al modulo principal

// servicio para agregar mensajes y recuperarlos
// Angular solo instancia el servicio una sola vez
// angular es el encargado de instanciarlo

// beneficios: Si tenemos una sola instancia podriamos guardar informacion
// del estado de nuestra aplicacion


.service('producto_service', function(){
    console.log(' Iniciando Servicio de Productos');
    let productos=[];

    if (window.localStorage.getItem('productos'))
        productos = JSON.parse(window.localStorage.getItem('productos'));

   // Closures - JavaScript 

    return {
        getProductos: function () {
            if (window.localStorage.getItem('productos'))
                productos = JSON.parse(window.localStorage.getItem('productos'));
            return productos;
        },

        addProducto: function (msg) {
            productos.push(msg);
            window.localStorage.setItem('productos',JSON.stringify(productos));
        },

        deleteProducto: function(product){
            for (let i = 0;i < productos.length; i++ ){
                if (product == productos[i].id){
                    productos.splice(i,1);
                    window.localStorage.setItem('productos',JSON.stringify(productos));
                }
            }
        },

        buscarProducto: function(product){
            let buscado = [];
            for (let i = 0;i < productos.length; i++ ){
                if (product == productos[i].nombre){
                    buscado.push(productos[i])
                }
            }
            return buscado;
        }
    }
});



