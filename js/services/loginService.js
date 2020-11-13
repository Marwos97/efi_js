angular.module('appmain')

.service('login_service', function(){
    console.log(' Iniciando Servicio de Login');
    let usuarios=[{id: 1, username:"admin", password:"password123"}];
    let current_user = {id: 0, username: 0}

    if (window.localStorage.getItem('usuarios'))
        usuarios = JSON.parse(window.localStorage.getItem('usuarios'));

    if (window.localStorage.getItem('current_user'))
        current_user = JSON.parse(window.localStorage.getItem('current_user'));

    return {
        getUsuarios: function () {
            return usuarios;
        },
        getCurrentUser: function(){
            return current_user;
        },
        addUsuario: function (msg) {
            usuarios.push(msg);
            window.localStorage.setItem('usuarios',JSON.stringify(usuarios));
            
        },
        setCurrentUser: function(current){
            window.localStorage.setItem('current_user',JSON.stringify(current));
        }
    }
});

