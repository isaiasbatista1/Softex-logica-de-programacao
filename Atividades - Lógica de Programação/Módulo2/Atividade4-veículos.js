/*Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.*/

let qtdrodas = parseInt(prompt("Digite quantas rodas tem o veículo: "));
let pesobruto = parseFloat(prompt("Digite o peso(KG) do veículo: "));
let qtdpessoas = parseInt(prompt("Quantas pessoas o veículo comporta: "));

if (qtdrodas ===2 || qtdrodas ===3) {
    console.log("Esse veículo pertence a categoria A")}
else if (qtdrodas ===4 && qtdpessoas <=8 && pesobruto <=3500){
    console.log("Esse veículo pertence a categoria B")
}else if (qtdrodas >=4 && pesobruto ===3500 && pesobruto<=6000){
    console.log("Esse veículo pertece a categoria C")
}else if (qtdrodas >=4 && qtdpessoas >8){
    console.log("Esse veículo pertence a categoria D")
}else if(qtdrodas >=4 && pesobruto >6000){
    console.log("Esse veículo pertece a categoria E")
}else{
    console.log("Você digitou uma opção inválida.")
}


