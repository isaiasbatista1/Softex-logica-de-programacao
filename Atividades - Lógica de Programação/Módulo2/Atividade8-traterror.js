/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/


function verificaAno(){
    while(true){
        const ano = parseInt(prompt("Digite o ano do seu nascimento: "))
        //isNaN verifica se o valor é NaN ou não. obs:NaN = Not at Number.
        if(!isNaN(ano) && ano >=1922 && ano <=2021){
            return ano
        }else {
            //exibe uma caixa de diálogo simples na tela.
            alert("Ano inválido. O ano deve estár 1922 e 2021.")
        }
    }
}
  

function verificaIdade(anonasc,anoatual){
    return anoatual-anonasc
}

function cadastraCliente(){
    const nome = prompt("Digite o seu nome completo: ")
    const anonasc = verificaAno()
    const anoatual = 2023
    const idade = verificaIdade(anonasc,anoatual)

    alert(`Seu nome completo é: ${nome}\nVocê tem ou terá ${idade} anos em ${anoatual}: .`)        
}

cadastraCliente();