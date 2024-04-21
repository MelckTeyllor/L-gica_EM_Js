let valor
let resultado
valor = parseInt(prompt(`Digite um valor:`))

for (let i = 0; i < 11; i++) {
   
    resultado = valor * i
    alert(`${valor} X ${i} = ${resultado}`)
}