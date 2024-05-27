// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let n1 = parseInt(prompt('Digite a nota do primeiro bimestre: '))
let n2 = parseInt(prompt('Digite a nota do segundo bimestre: '))
let n3 = parseInt(prompt('Digite a nota do terceiro bimestre: '))
let n4 = parseInt(prompt('Digite a nota do quarto bimestre: '))

let total = n1+n2+n3+n4
let media= total/4

if(media<5){
    alert('Infelizmente você foi Reprovado')
}
if(media >5 || media <7){
alert('Recuperação')
}
if(media>=7){
    alert('Aprovado!')
}
