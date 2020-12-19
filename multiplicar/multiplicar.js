/**
 * require: sirve para importar paquetes de node, externos a node o creados por nosotros
 * Tipos de requireds
 * const fs = require('fs'); Usar una libreria propia de node o nativa
 * const fs = require('express'); Usar una libreria externa a node o no nativa
 * const fs = require('./fs'); Usar una libreria creadas por nosotros en el proyecto
 */
const fs = require('fs');

// De esta forma tambien se puede hacer un module.exports
//module.exports.crearArchivo = base => { 
let crearArchivo = (base, limite = 10) => {
    /* creamos una promesa */
    return new Promise((resolve, reject) => {

        if (!Number(base)) return reject(`El valor introducido como base \"${base}\" no es un número`);
        if (!Number(limite)) return reject(`El valor introducido como límite \"${limite}\" no es un número`);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla_del_${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla_del_${base}.txt`); //console.log(`El archivo \"tabla_del_${base}.txt\" ha sido creado`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    /* creamos una promesa */
    return new Promise((resolve, reject) => {

        if (!Number(base)) return reject(`El valor introducido como base \"${base}\" no es un número`);
        if (!Number(limite)) return reject(`El valor introducido como límite \"${limite}\" no es un número`);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);

    });
}

/* Defino como global la funcion crearArchivo para poder utilizarla
   desde otro lugar 
   module.exports{
       atributo: valor_atributo // si son iguales se pone una sola vez

   }*/
module.exports = {
    crearArchivo,
    listarTabla
}

/* El exports tambien se puede especificar directamente en la funcion:

module.exports.crearArchivo = (base)=> {

} 
*/