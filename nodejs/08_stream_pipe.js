'use strict'
// para archivos .txt.gzip
let fs = require('fs');
let zlib = require('zlib');

let streamLectura1 = fs.createReadStream('./dir_datos/fich_write.txt');
let streamEscritura1 = fs.createWriteStream('./dir_datos/fich_write.txt.gz');

//streamLectura.setEncoding('utf-8');
// Compress stream1
streamLectura1.pipe(zlib.createGzip()).pipe(streamEscritura1).on('finish', () => 
{console.log('done compressing')});


let streamLectura1 = fs.createReadStream('./dir_datos/fich_write.txt');
let streamEscritura1 = fs.createWriteStream('./dir_datos/fich_write.txt.gz');

// // Uncompress stream2
// streamLectura2.pipe(zlib.createGunzip()).pipe(streamEscritura2).on('finish', () => 
// {console.log('done uncompressing')});
