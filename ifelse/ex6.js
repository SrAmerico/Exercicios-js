// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let data = parseInt(prompt("Digite o ano de seu nascimento"))
let ano = new Date().getFullYear()

if (ano - data >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

console.log("Você tem " + (ano - data) + " anos")