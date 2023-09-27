/*Faça, utilizando javascript, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */

function calc2 (){
    while(true){
        console.log("====== Calculadora 2.0 ======")
        console.log("\nEscolha uma opção:")
        console.log("1 - Adição")
        console.log("2 - Subtração")
        console.log("3 - Multiplicação")
        console.log("4 - Divisão")
        console.log("0 - Sair")

        const op = Number(prompt("Digite a operação desejada:"))

        if(op ===0){
            console.log("Saindo da calculadora.")
            break;
        }

        if (op < 1 || op > 4){
            console.log("Opção inválida")
            continue;
        }

        const n1= Number(prompt("Digite o primeiro número: "))
        const n2= Number(prompt("Digite o segundo número: "))

        switch (op) {
            case 1:
                console.log(`Resultado da operação é ${n1+n2}`)
                break;
            case 2:
                console.log(`Resultado da operação é ${n1-n2}`)
                break;
            case 3:
                console.log(`Resultado da operação é ${n1*n2}`)
                break;
            case 4:
                if (n2 !==0){
                console.log(`Resultado da operação é ${n1/n2}`)
                }else {
                    console.log("Erro: Não é possível realizar divisão por 0.")
                }
                break; 
            default:
                console.log("Opção inválida.")
                break;
        }

    }

}

calc2();