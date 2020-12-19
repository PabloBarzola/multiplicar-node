const opciones = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Especifica la base a utilizar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Especifica el limite de elementos a multiplicar'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}