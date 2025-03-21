const fs = require('node:fs');

console.log('Leyendo archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text);

console.log('--> hago cosas en el medio...');

console.log('Leyendo seegundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText);


