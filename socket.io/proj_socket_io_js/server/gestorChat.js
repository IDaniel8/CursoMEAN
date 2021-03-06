var numeroClientes = 0;
var mensajes = [{
    id: 1,
    text: "Primer mensaje del servidor",
    author: "Servidor"
}];

function getNumClientes() { return { "numeroClientes": numeroClientes }; }

function agregarCliente() { numeroClientes++; }

function quitarCliente() { numeroClientes--; }

function agregarMensaje(mensaje) { mensajes.push(mensaje); }

function getMensajes() { return mensajes; }

module.exports = {
    "getNumClientes": getNumClientes,
    agregarCliente: agregarCliente,
    quitarCliente: quitarCliente,
    agregarMensaje: agregarMensaje,
    getMensajes: getMensajes
}