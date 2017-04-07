'use strict';

const miBuff = Buffer.from('Hola Mundo', 'utf8');
const miBuff2 = Buffer.alloc(20);
const miBuff3 = Buffer.alloc(50);

miBuff2[0] = miBuff[5];
miBuff2[1] = miBuff[6];
miBuff2[2] = miBuff[7];
miBuff2[3] = miBuff[8];
miBuff2[4] = miBuff[9];

console.log('Contenido buffer: ' + miBuff.toString());
console.log('Buffer en bruto: ');
console.log(miBuff);

console.log('Contenido buffer2: ' + miBuff2.toString());
console.log('Buffer2 en bruto: ');
console.log(miBuff2);

miBuff.copy(miBuff3, 0);
miBuff2.copy(miBuff3, 6);