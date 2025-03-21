const fs = require('node:fs');

console.log('Leyendo archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
})

console.log('Leyendo seegundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8',  (err, secondText) => {
    console.log(secondText);
})


