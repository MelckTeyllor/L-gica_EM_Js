let nota
let media = 0
let contadora = 1
 while (contadora <= 4) {
    nota = parseFloat(prompt(`Digite sua ${contadora}° nota`))
    media = media + nota
    contadora++ 
 }

 media = media /4

 if (media >= 5) {
    alert(`Você foi aprovado sua média foi ${media}`)
} else {
    alert(`Você foi reprovado sua média foi ${media}`) 
}
