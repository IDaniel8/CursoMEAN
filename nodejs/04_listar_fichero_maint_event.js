"use strict";
let moduloFiltrado = require("./04_listar_fichero_module_event.js");
let directorio = process.argv[2];
let extension = process.argv[3];

function queHacerCuandoDevuelvaLosFicheros(arraryDeFicheros) {
    arraryDeFicheros.forEach((fichero) => {
        console.log("Fichero: " + fichero);
    })
}
moduloFiltrado.on("alfiltrar", queHacerCuandoDevuelvaLosFicheros);

moduloFiltrado(directorio, extension);