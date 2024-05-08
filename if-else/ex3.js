// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.


// Recebe um número do usuário
const numero = parseFloat(prompt("Digite um número:"));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("Este número é par!");
} else {
    console.log("Este número é ímpar!");
}