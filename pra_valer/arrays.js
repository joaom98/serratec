
// const lista = [1, 4, 9, 12]

// for( let i = 0 ; i  < lista.length ; i++ ){
//     lista[i] = lista[i] * 2;
// }
// console.log(lista)

// const novaLista = lista.map( elemento => elemento * 2)

// console.log(novaLista)

const listaDeFrutas = ['Maçã', 'Pêra', 'Carambola', 'Uva', 'Banana', 'Laranja', 'Açaí']

// const novaLista = listaDeFrutas.filter( (elemento) => {
//     if ( elemento.length > 4){
//         return false;
//     }
//     else {
//         return true;
//     }
// })

const novaLista = listaDeFrutas.filter( elemento =>  elemento.length <= 4)

console.log(novaLista)