/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.*/


//Usando a Busca Linear

function buscaLinear(array, alvo) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === alvo) {
        return i;
      }
    }
    return -1; 
  }
  
  const sequencia = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const alvo = 20;
  
  const comeco = buscaLinear(sequencia, alvo);
  
  if (comeco !== -1) {
    console.log(`O valor ${alvo} foi encontrado no índice ${comeco}.`);
  } else {
    console.log(`O valor ${alvo} não foi encontrado na sequência.`);
  }
  



//Usando a Busca Binária(mais efetiva)
function buscaBinaria(array, objetivo){
    let inicio = 0
    let fim = array.length -1

    while(inicio <= fim){
        const meio =Math.floor((inicio + fim))
    
    if(array[meio] === objetivo){
        return meio
    }else if (array[meio]< objetivo){
        inicio = meio + 1
    }else {
        fim = meio - 1
    }
}
    return -1
}

const array = [5,7,8,10,12,15,18,20,25,30]
const objetivo = 20

const indice = buscaBinaria(array, objetivo)

if(indice !== -1){
    console.log(`O valor ${objetivo} foi encontrado o início ${indice}`)
}else {
    console.log(`O valor ${objetivo} não foi encontrado no array`)
}