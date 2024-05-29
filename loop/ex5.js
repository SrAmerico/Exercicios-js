// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let a = 0
let b = 1
let c

for (cont = 0; cont < 10; cont++) {
   console.log(a)
   c = a + b
   a = b
   b = c
}