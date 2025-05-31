function calcularidade(){

var nome = document.getElementById('nome1').value;
console.log(nome)
var nascimento = document.getElementById('nascimento').value;
var anoatual = new Date().getFullYear;
var idade = anoatual - nascimento;
var resultado = document.getElementById('resultado')
resultado.textContent = `ola ${nome} Você tem ${idade}`;


}
