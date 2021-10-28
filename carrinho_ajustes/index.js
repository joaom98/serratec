console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

console.log(db);
//console.table(db) - verificar comando para listar os produtos como tabela ***

const{produtos}= db
produtos.sort ((a, b) => b.preco - a.preco)

console.table(produtos)

const readline = require('readline-sync')


/* const idProdutos = parseInt(readline.question("Informe a ID do produto desejado: "))
const quantidade = parseInt(readline.question("Informe a quantidade do produto desejado: "))
const desconto = parseInt(readline.question("Você possui cupom de desconto?"))
function procurar (produto) {
  return produto.id === idProdutos
}
const produtoEncontrado = produtos.find(procurar)
console.log(produtoEncontrado)  */

const array = new Array()

let IDproduto
let procurarID
let itensCompras
let promoCode

const compras = () => {

  IDproduto = parseInt(readline.question('Digite a ID do produto desejado: '))

  for (i = 0; i < 1000; i++) {
    procurarID = produtos.find(item => item.id === IDproduto)
    if (procurarID) {
      break;

    } else {
      IDproduto = parseInt(readline.question('Id não encontrado, tente novamente: '))
    }
  }

  itensCompras = parseInt(readline.question('Digite a quantidade de produtos que gostaria de adquirir: '))

  for (i = 0; i < 1000; i++) {
    if (itensCompras > 0) {
      break;
    } else {
      itensCompras = parseInt(readline.question('Digite uma quantidade válida: '))
    }
  }

  const produtosSacola = { ...procurarID, quantidade: itensCompras }
  array.push(produtosSacola)

  const continuarComprando = readline.question('Deseja inserir mais algum produto no carrinho? (Digite S ou N): ')
  const continuarCompra = continuarComprando.toLowerCase()

  if (continuarCompra === "n") {
    promoCode = parseInt(readline.question('Digite o valor do seu cupom de desconto: '))
  } else {
    compras()
  }

  for (i = 0; i < 1000; i++) {
    if (promoCode >= 16 || promoCode <= 0) {
      promoCode = parseInt(readline.question('Cupom inválido, tente novamente: '))
    } else {
      break;
    }
  }

}

compras()

class Compra {
  constructor(array) {
    this.newProducts = array
    this.date = new Date()
    this.subtotal = 0
  }
  calcularSubtotal() {
    this.subtotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  }

  dateEdit() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    this.date = this.date.toLocaleDateString('pt-BR', options)
  }
}

const compra = new Compra(array)
console.table(compra.newProducts)

compra.dateEdit()
console.log(`--- Dados do pedido realizado em ${compra.date} ---`)

compra.calcularSubtotal()
console.log(`Valor do pedido: R$ ${compra.subtotal.toFixed(2)}`) 

const discount = compra.subtotal * (promoCode / 100)
console.log(`Valor do desconto: R$ ${discount.toFixed(2)}`)

const total = compra.subtotal - discount
console.log(`Valor total: R$ ${total.toFixed(2)}`)
