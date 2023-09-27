/*Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/


function calcsimples (n1,n2,op){
    switch (op) {
        case 1:
            return n1 + n2
        case 2:
            return n1 - n2
        case 3:
            return n1 * n2
        case 4:
            return n1 / n2
        case 5:
            return n2 !==0 ? n1 / n2: "Erro:Não é possível dividir por zero"    
        default:
            return 0;    
    }
}

//Adição
  console.log(calcsimples(15,8,1))
//Subtração  
  console.log(calcsimples(15,8,2))
//Multiplicação  
  console.log(calcsimples(15,8,3))
//Divisão  
  console.log(calcsimples(15,8,4))
  //Divisão exemplo 2
  console.log(calcsimples(0,8,4))
  //Divisão  exemplo 3
  console.log(calcsimples(15,0,4))
