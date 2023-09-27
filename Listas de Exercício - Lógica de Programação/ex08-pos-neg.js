let numero = parseInt(prompt("Digite um número inteiro: "))

if (numero > 0) {
    console.log(`Você digitou o número ${numero} e ele é um número positivo`)
}else if (numero < 0) {
    console.log(`Você digitou o número ${numero} e ele é um número negativo`)
}else {
    console.log(`Você digitou o número ${numero} e ele é neutro.`)
}