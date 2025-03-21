// eslint-disable-next-line no-unused-vars
const { promises } = require('node:dns')
const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(` No se puede leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromisses = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // status - informacion del archivo
    } catch {
      // eslint-disable-next-line no-template-curly-in-string
      console.error('no se puede leer el archivo ${filePath}')
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType}  ${pc.blue(file.padEnd(20))}  ${pc.green(
      fileSize
    )}  ${pc.yellow(fileModified)}`
  })
  const filesInfo = await Promise.all(filePromisses)

  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}
ls(folder)

/* .then(files => {
        files.forEach(file => {
            const filePath = path.join(folder, file);
            fs.stat(filePath);
        });
    })
    .catch(err => {
        if(err){
            console.error(err);
            return;
        }
    });
    */
