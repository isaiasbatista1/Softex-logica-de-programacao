/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.*/

let pessoas = ["Adriana","Bruno","Carla","Débora","Edson","Fábio","Giovana","Hellen","Isabel","Leonidas"]
let idades = [18,18,25,26,22,27,26,22,30,24]
let cores = ["Azul","Verde","Vermelho","Lilás","Roxo","Cinza","Preto","Rosa","Violeta","Laranja"]

//Dados iniciais das listas
console.log("Dados iniciais: ")
for (let i = 0; i< pessoas.length;i++){
    console.log("Pessoa: "+pessoas[i] + ",Idade:" +idades[i],",Cor:"+cores[i])
}

//Dados alterados
idades[2] = 30
cores[4] = "Anil"

//Aplicando alterações
console.log("\nAplicando alterações")
for(let i = 0; i < pessoas.length; i++){
    console.log("Pessoa: "+pessoas[i] + ",Idade:"+idades[i]+",Cor:"+cores[i])
}
