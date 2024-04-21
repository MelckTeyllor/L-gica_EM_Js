let valorPositivo

valorPositivo = parseInt(prompt("Digite um valor inteiro:"))

if (valorPositivo < 0) {
    valorPositivo = valorPositivo * (-1)
}

alert(valorPositivo)