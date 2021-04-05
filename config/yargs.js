const argv = require('yargs')
                .option('b', { //establecemos una manera corta de pasar el argumento --base como --b o -b
                    alias: 'base', //argumento de la manera larga
                    type: 'number', //tipo del argumento
                    demandOption: true, //si es requerido el argumento
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el límite de la tabla de multiplicar'
                })
                .check((argv, options) => { //comprobamos el tipo del argumento
                    if(isNaN(argv.b)) throw 'La base tiene que ser de tipo numérico';
                    if(isNaN(argv.h)) throw 'El límite tiene que ser de tipo numérico';
                    return true; //retornamos true si no hubo ningún error
                })
                .argv;

module.exports = argv;