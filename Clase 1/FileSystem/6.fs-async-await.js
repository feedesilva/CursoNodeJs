const {readFile} = require ('node:fs/promises');

(async () => {
    console.log('Leyendo archivo...');
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto:', text);
    
    console.log('--> hago cosas en el medio...');
    
    console.log('Leyendo seegundo archivo...');
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto:', secondText);}

)();
