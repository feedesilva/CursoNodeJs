// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
process.exit(0) // todo bien
process.exit(1) // error

// controlar los eventos del proceso
process.on('exit', function () {
  console.log('Saliendo del proceso')
})

// current working directory
process.cwd() // directorio de trabajo

// variables de entorno
process.env() // variables de entorno
