/* Funções. O que é uma função?

Uma forma de juntar um pedaço de código 
para resolver um problema único.

Recebe entradas (parâmetros) e pode dar um retorno

*/

// Função nomeada

function escreveSaudacao(){
    console.log("Olá pessoal!")
}

escreveSaudacao()

// Função anônima (falar sobre hoisting)

const soma = function (a, b) {
    return a+b;
}

console.log( soma(1, 2) )

// Arrow functions 

const subtracao = (a, b) => {
    return a - b;
}

/* Também pode ser:

const subtracao = (a, b) => a - b;

E se tivesse apenas um parâmetro

const aoQuadrado = x => x * x

*/


console.log( subtracao(4, 12) )

/* Ok, mas porquê?

Em resumo: mais simples para utilizar em funções que precisam
receber outras funções como parâmetro

Leituras recomendadas:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

https://www.alura.com.br/artigos/conhecendo-arrow-functions

*/