const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Admin',
        message: 'Bienvenido'
    });

    client.on('disconnect', () =>{
        console.log('Usuario desconectado');
    });

    // Escuchar cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*
        if ( message.usuario){
            callback({
                resp: 'Todo salió bien'
            });
        } else {
            callback({
                resp: 'Todo salió mal!!!'
            });
        }   
        */
    });
});