// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let peso = parseFloat(prompt('Digite o seu peso apenas em quilogramas (caso haja gramas adicionais utilize ponto (.) ): '))
let altura = parseFloat(prompt('Digite sua altura em metros'))

let total = peso/(altura*altura)
let ajuste = total.toFixed(2)

if(total < 18.5 ){
alert('Abaixo do peso')
}else if(ajuste > 18.5 && total <= 24.9){
    alert('Peso normal')
}else if (ajuste >= 25.0 && total <= 29.9 ){
    alert('Sobre peso')
}else if (ajuste > 30.0 && total <= 34.9){
    alert('Obesidade grau 1')
}else if(ajuste > 35.0 && ajuste <= 39.9){
    alert('Obesidade 2 grau')
}else if (ajuste >= 40.0){
    alert('Obesidade grau 3')
}

