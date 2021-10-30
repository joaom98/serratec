const bancoDeDados = require('../codigos/dados.json')

class Carrinho {
    constructor() {
        this.itens = [] 
        this.subtotal = 0;
        this.frete = null;
        this.total = null;
    }

    adiciona( item ){

        // Adicionar validacao depois
        if ( item.preco > 0 && item.quantidade > 0){
            this.itens.push(item);
            console.log(`O item ${item.nome} foi adicionado ao carrinho e custa R$${item.preco}`)
        }
    }

    listar() {
        this.itens.forEach( (elemento) => {
            console.log(`Temos o item ${elemento.nome}`)
        })
    }

    retirar(nome) {
        const posicao = this.itens.findIndex( (elemento) => elemento.nome === nome )

        if ( posicao !== -1){
            this.itens.splice(posicao, 1);
        }
    }


    calcularSubtotal() {
        this.itens.map( (elemento) => {
            this.subtotal += elemento.quantidade * elemento.preco ;
        })
    }

    somaFrete( regiao ) {
        if (regiao === "Nordeste"){
            this.frete = 10;
        }
        else if (regiao === "Norte"){
            this.frete = 20;
        }
        else if (regiao === "Sudeste"){
            this.frete = 30;
        }
        else if (regiao === "Centro-Oeste"){
            this.frete = 35;
        }
        else if (regiao === "Sul"){
            this.frete = 40;
        }

        else {
            this.frete = 100;
        }
    }

    aplicaDesconto ( metodoDePagamento) {
        if (metodoDePagamento === "Pix"){
            this.total = 0.9 * (this.subtotal + this.frete);
        }

        else {
            this.total = this.subtotal + this.frete;
        }
    }


    mostraValores(){
        console.log(`
        O valor dos itens é: ${this.subtotal}
        O valor do frete é: ${this.frete}
        O valor do total (com desconto) é: ${this.total}
        `)
    }
}

const carrinho = new Carrinho();

bancoDeDados.listaDeItens.forEach( (elemento) => {
    carrinho.adiciona(elemento)
})

carrinho.listar();

carrinho.retirar("Mouse");

console.log(' --------------------- ')

carrinho.listar();

carrinho.calcularSubtotal();
carrinho.somaFrete("Norte")
carrinho.aplicaDesconto("Pix");
carrinho.mostraValores();