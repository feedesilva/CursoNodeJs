const os = require('node:os')

console.log('nombre os ', os.platform())
console.log('version os', os.release())
console.log('artch os', os.arch())
// console.log('cpus',os.cpus())
console.log('memoria libre: ', os.freemem() / 1024 / 1024)
console.log('memoria total: ', os.totalmem() / 1024 / 1024)
console.log('uptime: ', os.uptime() / 60 / 60)
