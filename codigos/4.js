// Exemplo simplificado do método "filter"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const palavras = ['tinta', 'piada', 'maçã', 'deserto', 'presente'];

const resultado = palavras.filter(palavras => palavras.length > 6);

//console.log(resultado);
// Saída esperada: [ 'deserto', 'presente' ]

// Exemplo aplicado de "filter"

const dados = require('./dados.json')

let itens = dados.listaDeItens;

//console.table(itens)

let listaFiltrada = itens.filter( (elemento) => {
    if ( elemento.quantidade > 0 && elemento.valor > 0){
        return true;
    }
    else {
        return false;
    }
} )

//console.table(listaFiltrada)

module.exports = {
    listaFiltrada
};