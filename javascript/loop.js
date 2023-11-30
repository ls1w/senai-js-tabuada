'use strict'

let contador = 0;
const slcNumero = parseInt(document.getElementById('slcNumero').value);
let resultado;
let linha;

function tabuadaWhile() {
    while (contador <= 10) {
        resultado = slcNumero + ' X ' + contador + ' = ' + (slcNumero * contador);
        contador = contador * slcNumero
    }
}

