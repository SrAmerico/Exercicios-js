// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let n1 = parseInt(prompt("Digite o primeiro numero"))
let n2 = parseInt(prompt("Digite o segundo numero"))
let n3 = parseInt(prompt("Digite o terceiro numero"))

if (n1 < n2 && n2 < n3) {
    console.log("Números em ordem crescente")
}
else {
    console.log("Números não estão em ordem crescente")
}