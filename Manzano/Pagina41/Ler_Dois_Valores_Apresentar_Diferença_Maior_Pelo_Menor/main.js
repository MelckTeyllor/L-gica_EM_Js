let valor1 
let valor2
let diferença
valor1 = parseInt(prompt("Digite um valor: "))
valor2 = parseInt(prompt("Digite outo valor: "))

diferenca = valor1 - valor2

if (valor1 < valor2) {
    diferenca = valor2 - valor1
}

alert(`A diferença do maior pelo menor é ${diferenca}` )