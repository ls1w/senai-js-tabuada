'use strict';

const resultadoExportado = document.getElementById('resultadoTabuada');
const btnCalcular = document.getElementById('btn-calcular');
const btnLimpar = document.getElementById('btn-limpar');




function limparTabuada() {
    resultadoExportado.innerHTML = '';
    // location.reload();
}

function tabuadaWhile() {
    limparTabuada();

    const numTabuada = parseInt(document.getElementById('slcNumero').value);
    let linha = '';
    let resultado;

    let contadorTabuada = 0;
    while (contadorTabuada <= 10) {
        resultado = numTabuada + ' X ' + contadorTabuada + ' = ' + (numTabuada * contadorTabuada);
        linha += '<tr><td>' + resultado + '</td></tr>';
        contadorTabuada++;
    };

    resultadoExportado.innerHTML = linha;
};

function tabuadaFor() {
    limparTabuada();

    const numTabuada = parseInt(document.getElementById('slcNumero').value);
    let linha = '';
    let resultado;

    for (let contadorTabuada = 0; contadorTabuada <= 10; contadorTabuada++) {
        resultado = numTabuada + ' X ' + contadorTabuada + ' = ' + (numTabuada * contadorTabuada);
        linha += '<tr><td>' + resultado + '</td></tr>';
    };
    resultadoExportado.innerHTML = linha;
};




btnCalcular.addEventListener('click' , tabuadaFor);
btnLimpar.addEventListener('click' ,  limparTabuada);