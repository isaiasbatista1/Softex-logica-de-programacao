/*Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente 
utilizando o array mencionado?*/


/*Fila - funciona no esquema FIFO(First-In-First-Out) ou seja
o primeiro que item que entra será o primeiro a sair. 
push insere um elemento no final do array e o 
shift retira o primeiro elemento de um array*/

let fila = []
fila.push(3,7,9,1,0)

console.log(`Inseridos na Fila: `, fila)

while(fila.length > 0){
    fila.shift()
}

console.log("Após a remoção a Fila fica:", fila)


/*Pilha - Funciona da forma FILO(First-In, Last - Out) ou seja
o primeiro que entra será o último a sair*/

let pilha = []
pilha.push(3,7,9,1,0)

console.log(`Inseridos na Pilha: `, pilha)

pilha.pop(0)
pilha.pop(1)
pilha.pop(9)
pilha.pop(7)
pilha.pop(3)

console.log("Após a remoção a Pilha fica:", pilha)

/*Lista - Permitem adicionar,remover e acessar elementos através do seus indices.*/
let lista = [3,7,9,1,0]

function deletar(numero){
    const comeco = lista.indexOf(numero)
    if(comeco !==-1){
        lista.splice(comeco,1)
        return true
    } else {
        return false
    }
}

console.log(`Inseridos na Lista: `, lista)

deletar(3)
deletar(7)
deletar(9)
deletar(1)
deletar(0)

console.log("Após a remoção a Lista fica:", lista)



