"use strict";

let fs = require("fs");

let streamEscritura = fs.createWriteStream("./dir_datos/fich_write.txt");
let streamLectrura = fs.createReadStream("02_process.js");

const miBuff = Buffer.from("Hola munda", "utf8");

streamEscritura.write(miBuff.toString());