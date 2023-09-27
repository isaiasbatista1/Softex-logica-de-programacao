/*Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?*/


//Lista

const listanumerica = [3,7,9,1,0]
const lista = [...listanumerica]

const removerLista = []
while(lista.length > 0){
    const numremovido = lista.pop()
    removerLista.push(numremovido)
}

//Testando a lista
console.log("Números deletados: ",removerLista)
console.log("Resultado da lista: ", lista)


