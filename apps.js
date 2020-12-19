// const multiplicar = require('./multiplicar/multiplicar') // no se pone la extension .js pq es redundante
// Definimos lo anterior con una destructuracion para evitar
// llamar a la funcion crearArchivo como multiplicar.crearArchivo y poderla convocar directamente
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const { argv } = require('./config/yargs');
// Lo anterior puede definirse de esta otra forma:
// const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

// console.log('Comando: ', comando);
// console.log('Base: ', argv.base);
// console.log('Limite: ', argv.limite);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => {

                console.log(colors.green('====================='));
                console.log(colors.green(`==   Tabla del ${argv.base}   ==`));
                console.log(colors.green('====================='));
                console.log(colors.white(tabla));

            })
            .catch(e => console.log(colors.red(e)));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(colors.red(e)));
        break;
    default:
        console.log(colors.red('Comando no reconocido'));
}