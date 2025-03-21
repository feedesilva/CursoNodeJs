const path = require ('node:path')

console.log(path.sep);

//unir rutas de archivos
const filePath = path.join('folder', 'subfolder', 'file.txt');
console.log(filePath);

//nombre del fichero
const base = path.basename(filePath);
console.log(base);

//nombre del fichero sin la extensión
const base2 = path.basename(filePath, '.txt');
console.log(base2);

//extension de un archivo
const extension = path.extname(filePath);
console.log(extension);
