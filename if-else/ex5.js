// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

const num1 = parseFloat(prompt("Digite o primeiro número"));
const num2 = parseFloat(prompt("Digite o segundo número"));
const num3 = parseFloat(prompt("Digite o terceiro número"));

if (num1 < num2 && num2 < num3) {
    alert("Os números estão em ordem crescente!");
} else {
    alert("Os números não estão em ordem crescente.");
}