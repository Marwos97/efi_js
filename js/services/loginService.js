angular.module('appmain')

.service('login_service', function(){
    console.log(' Iniciando Servicio de Login');
    let usuarios=[{username:"admin", password:"admin"}];

    if (window.localStorage.getItem('usuarios'))
        usuarios = JSON.parse(window.localStorage.getItem('usuarios'));

    return {
        getUsuarios: function () {
            return usuarios;
        },
        addUsuario: function (msg) {
            usuarios.push(msg);
            window.localStorage.setItem('usuarios',JSON.stringify(usuarios));

        },
    }
});

