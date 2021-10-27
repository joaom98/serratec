const lista1 = [1, 4, 9, 16];

// Passamos uma função para o "map"
const lista2 = lista1.map( (x) => {
    return x * 2
});

console.log(lista2);
// Saída esperada: [2, 8, 18, 32]

/*
    Forma alternativa:

const lista2 = lista1.map( x => x * 2);

*/

const dados = require('./dados.json')

let itens = dados.listaDeItens;

console.table(itens)

let itensDobrados = itens.map( (item) => {
    item.quantidade = item.quantidade * 2

    return item;
})

console.table(itensDobrados)