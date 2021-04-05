const fs = require('fs'); //librería para manejar el sistema de archivos
const colors = require('colors'); //librería para cambiar de colores los strings

/* const tablaMultiplicar = (numero) => {
    let cadena = '';
    let promesa = null;
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        if(i !== 10) cadena += `${numero} x ${i} = ${resultado}\n`;
        else cadena += `${numero} x ${i} = ${resultado}`;
    }
    try {
        fs.writeFileSync(`tabla-${numero}.txt`, cadena);
        promesa = new Promise((resolve, reject) => resolve(`tabla-${numero}.txt`));
    } catch (error) {
        promesa = new Promise((resolve, reject) => reject(error));
    }
    return promesa;
}; */

const tablaMultiplicar = async(numero, listar, limite) => {
    let consola = '', salida = '';
    for(let i = 1; i <= limite; i++){
        let resultado = numero * i;
        consola += (i !== limite) ? `${numero} x ${i} = ${resultado}\n`.magenta : `${numero} x ${i} = ${resultado}`.magenta;
        salida += (i !== limite) ? `${numero} x ${i} = ${resultado}\n` : `${numero} x ${i} = ${resultado}`;
    }
    if(listar) console.log(consola);
    try {
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        return `tabla-${numero}.txt`.rainbow;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    tablaMultiplicar
};