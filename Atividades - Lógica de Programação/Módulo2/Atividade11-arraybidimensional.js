/*Nesta atividade, você deve criar um código em JavaScript com uma 
matriz bidimensional para armazenar informações sobre animais e as
suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes
informações sobre ele, como nome, espécie e idade.*/


let animais = [
    ["Leão","Mamífero",6],
    ["Lobo","Mamífero",15],
    ["Falcão","Ave",20],
    ["Jacaré","Réptil",50]
];

for (let i = 0; i < animais.length; i++){
    let animal = animais[i]
    let nome = animal[0]
    let especie = animal[1]
    let idade = animal[2]

    console.log("Animal: "+ nome + ", Espécie: "+ especie + ", Idade: " +idade)
}
