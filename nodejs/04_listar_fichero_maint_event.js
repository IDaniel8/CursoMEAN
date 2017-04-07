"use strict";
let moduloFiltrado = require("./04_listar_fichero_module_event.js");
let directorio = process.argv[2];
let extension = process.argv[3];

if(process.argv.length < 4){
    console.log("error de parametros incorrectos");
}

function queHacerCuandoDevuelvaLosFicheros(arraryDeFicheros) {
    arraryDeFicheros.forEach((fichero) => {
        console.log("Fichero: " + fichero);
    })
}
moduloFiltrado.on("alfiltrar", queHacerCuandoDevuelvaLosFicheros);
moduloFiltrado.on("onerror", error => console.log(`${error} estoy petando!`));

moduloFiltrado(directorio, extension);