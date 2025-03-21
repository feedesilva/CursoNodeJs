const fs = require('node:fs/promises');

console.log('Leyendo archivo...');
fs.readFile('./archivo.txt', 'utf-8')
    .then((text) => {
        console.log(text);
    })

console.log('Leyendo seegundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
    .then((secondText) => {
        console.log(secondText);
    })