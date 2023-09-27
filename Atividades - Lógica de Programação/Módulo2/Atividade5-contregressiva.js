/*Faça um código, em Javascript que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.*/


function contregressiva(){
    let seg = parseInt(prompt("Digite o tempo desejado até a explosão: "))
    console.log("Bomb has been planted, iniciando contagem regressiva");

    for (let i= seg; i>= 0; i--){
        if (i> 0){
            console.log(i + "segundos restantes")}
            else {
            console.log("BUUUMMMMM, Terrorist Win!");
        }
    }
}    
    const tempexplosao = 50;
    
    contregressiva(tempexplosao);