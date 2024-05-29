// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

let n = parseInt(prompt("Digite um numero inteiro"))

if (n%2 == 0) {
    console.log("O número " + n + " é par")
}
else {
    console.log("O número " + n + " é ímpar")
}