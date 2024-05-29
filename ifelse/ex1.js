// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


let nome = prompt("Olá, digite seu nome")
let senha = prompt("Digite a senha")

if (nome == "admin" && senha == "senha123") {
    console.log("Bem-vindo " + nome)
} else {
    console.log("Nome incorreto")
}