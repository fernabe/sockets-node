var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

//Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola a todos'
}, function( response ){
    console.log(response);
});

socket.on('enviarMensaje', function(message){
    console.log(message);
});
