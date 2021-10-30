
function soma( numero1, numero2 ){
    return numero1 + numero2
}


// Função Nomeada
function escreveSaudacao(){
    console.log("Olá serratec!")
}

//escreveSaudacao();

// Função anônima

const subtracao = function (numero1, numero2) {
    return numero1 - numero2;
}

console.log( subtracao(3,2) )

// Arrow functions

const multiplica = (numero1, numero2) => {
    return numero1 * numero2
}

const elevaAoQuadrado = numero => numero * numero

console.log( elevaAoQuadrado(9) )

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//https://www.alura.com.br/artigos/conhecendo-arrow-functions






// Hoisting
function soma(a, b){
    return a+b
}

console.log(subtracao(2,3))

const subtracao = (a,b) => {
    return a-b;
}
