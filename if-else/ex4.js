// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas 
// e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 
// ou a mensagem de REPROVADO para média inferior a 5,0.

// Recebe as 4 notas
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const nota4 = parseFloat(prompt("Digite a quarta nota:"));

// Calcula a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Aprovado / Reprovado
if (media >= 7.0) {

    console.log(`Média: - APROVADO`);
} else if (media >= 5.0) {

    console.log(`Média: - RECUPERAÇÃO`);
} else {
    console.log(`Média: - REPROVADO`);
}