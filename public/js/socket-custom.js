var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
let x = Math.round(Math.random() * 100);

socket.emit('enviarMensaje', {
    usuario: 'Cliente ' + x,
    mensaje: 'Hola Mundo',
    fecha: new Date()
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});