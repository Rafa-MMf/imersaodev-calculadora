function calDiv() {
  mostra.innerHTML = ""
  var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor / segundoValor
  var tela ="<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
  
  mostra.innerHTML = mostra.innerHTML + tela
}

function calMult() {
  mostra.innerHTML = ""
  var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor * segundoValor
  var tela = "<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>"
  
  mostra.innerHTML = mostra.innerHTML + tela
}

function calSoma() {
  mostra.innerHTML = ""
  var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor + segundoValor
  var tela = "<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>"
  
  mostra.innerHTML = mostra.innerHTML + tela
}

function calSub() {
  mostra.innerHTML = ""
  var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var resultado = primeiroValor - segundoValor
  var tela = "<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>"
  
  mostra.innerHTML = mostra.innerHTML + tela
}
