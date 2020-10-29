angular.module('appmain',['ngRoute']) // definimos un modulo
.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/', {
        controller: "control_login",
        templateUrl: "views/login.html"
        })
        .when('/add_user', {
          controller: "control_login",
          templateUrl: "views/add_user.html"
        })
        .when('/add_product', {
          controller: "control_producto",
          templateUrl: "views/add_product.html"
        })
        .when('/productos', {
          controller: "control_producto",
          templateUrl: "views/products.html"
        })
        .when('/admin', {
          controller: "control_login",
          templateUrl: "views/admin.html"
        })
        .when('/products_admin', {
          controller: "control_producto",
          templateUrl: "views/products_admin.html"
        })
        .when('/home', {
          controller: "homeCtrl",
          templateUrl: "views/home.html"
        })
      .otherwise({
        redirectTo: "/"
       });
  }
]);

