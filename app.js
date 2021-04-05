const { tablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

//console.log(process.argv);

//manera de extraer argumentos de la consola sin librerías externas
/* const [ , , arg3 = 'base=5' ] = process.argv; //en la 1ra posición esta la ruta de nodeJS, en la 2da posición esta la ruta del archivo actual, y en la 3ra posición estará el argumento de la forma --base=6
const [ , base ] = arg3.split('='); //recogemos solo el valor del argumento */

//manera de extraer argumentos de la consola con la librería yargs
//acepta argumentos de la forma --base=5 o --base 5
//console.log(process.argv);
console.log(argv);

//console.log('base: yargs',argv.base);

//console.log(base);

tablaMultiplicar(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo,'creado')).catch(err => console.log(err));