// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


const anoNascimento = prompt("Digite o ano de nascimento:");


const anoAtual = 2024;
const idade = anoAtual - parseInt(anoNascimento);


if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você não é maior de idade.");
}
