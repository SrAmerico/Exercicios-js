let repetir = true

while (repetir) {
    let escolha = parseInt(prompt("DIGITE UM NÚMERO PARA CADA EXERCÍCIO\n\n0 - Sair\n\n1 - Exercicio para sair ao digitar 0\n2 - Somar números de 1 a 100\n3 - Imprime números ímpares de 1 a 50\n4 - Faz a méda aritmética de 4 notas de um aluno\n5 - Faz a contagem de um número digitado até 0\n6 - Calcula o IMC de uma pessoa\n"))

    if (isNaN(escolha)){
        console.log("Digite apenas números!")
        continue
    }

    switch (escolha) {
        case 0:
            console.log("Você escolheu sair!")
            repetir = false
            break
        case 1:
            ex1()
            break
        case 2:
            ex2()
            break
        case 3:
            ex3()
            break
        case 4:
            ex4()
            break
        case 5:
            ex5()
            break
        case 6:
            ex6()
            break
        default:
            console.log("Valor inserido incorreto!")
            break
    }
}


function ex1 () {
    while (true) {
        let numero = prompt("Digite um número: ")
        if (numero == "0") {
            console.log("Número 0 digitado")
            break
        }
    }
}

function ex2 () {
    let n = 1
    let soma = 0
    
    while (n <= 100) {
        soma+=n
        n++
    }
    
    console.log(soma)
}

function ex3 () {
    for (contador = 0; contador <=50; contador++) {
        if (contador%2 != 0) {
            
            console.log(contador)
        }
    }
}

function ex4 () {
    let nota1 = parseFloat(prompt("Digite a primeira nota"))
    let nota2 = parseFloat(prompt("Digite a segunda nota"))
    let nota3 = parseFloat(prompt("Digite a terceira nota"))
    let nota4 = parseFloat(prompt("Digite a quarta nota"))
    
    media = (nota1 + nota2 + nota3 + nota4) / 4
    
    if (media >= 7.0) {
        console.log("APROVADO")
    } else if (media >= 5.0 && media <= 7.0){
        console.log("RECUPERAÇÃO")
    } else {
        console.log("REPROVADO")
    }
}

function ex5 () {
    let numero = prompt("Digite um número: ")

    while (numero >= 0) {
        console.log(numero)
        numero--
    }
}

function ex6 () {
    let peso = parseFloat(prompt("Digite seu peso em KG"))
    let altura = parseFloat(prompt("Digite sua altura em metros"))
    
    let IMC = peso / (altura ** 2)
    
    if (IMC < 18.5) { // apenas abaixo de 18.5 ou seja 18.4 para menos
        console.log("Abaixo do peso")
    } else if (IMC < 24.9) { // de 18.5 até 24.9 pois o if anterior foi de menor que 18.5
        console.log("Peso normal")
    } else if (IMC < 29.9) {
        console.log("Sobrepeso")
    } else if (IMC < 34.9) {
        console.log("Obesidade grau 1")
    } else if (IMC < 39.9) {
        console.log("Obesidade grau 2")
    } else if (IMC >= 40.0) {
        console.log("Obesidade grau 3")
    } else {
        console.log("Valor digitado inválido ou nulo")
    }

    console.log(`IMC: ${IMC}`)
}