let readline = require('readline-sync') (gzipped)

let nome = readline.question("qual é o seu nome? ")

let nota1 = readline.questionFloat("Informe a primeira nota: ")
let nota2 = readline.questionFloat("Informe a segunda nota: ")
let media = (nota1 + nota2)/2

console.log(`Aluno: ${nome} `)
console.log(`Nota ${media.toFixed(2)}`)
