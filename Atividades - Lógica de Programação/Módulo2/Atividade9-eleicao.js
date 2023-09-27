/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

function eleicao() {
  let candX = 0;
  let candY = 0;
  let candZ = 0;
  let branco = 0;
  let nulo = 0;

  while (true) {
    console.log("----- Eleição -----");
    console.log("\nEscolha um candidato: ");
    console.log("889 - Candidato X");
    console.log("847 - Candidato Y");
    console.log("515 - Candidato Z");
    console.log("0 - Voto em Branco");
    console.log("5 - Sair do programa");

    const cand = Number(prompt("Digite o número do seu candidato: "));

    if (isNaN(cand)) {
      console.log("Você digitou uma opção inválida.");
      continue;
    } else if (cand === 889) {
      candX++;
      console.log("Você votou no candidato X!");
    } else if (cand === 847) {
      candY++;
      console.log("Você votou no candidato Y!");
    } else if (cand === 515) {
      candZ++;
      console.log("Você votou no candidato Z!");
    } else if (cand === 0) {
      branco++;
      console.log("Você votou em branco. ");
    } else if (cand === 5) {
      console.log("Você saiu do programa.");
      break;
    } else {
      nulo++;
      console.log("Você votou nulo");
    }
}


console.log("\n-----Resultado da eleição:----- ");
console.log("Candidato X: " + candX + "votos.");
console.log("Candidato Y: " + candY + "votos.");
console.log("Candidato Z: " + candZ + "votos.");
console.log("Votos em branco:" + branco + "votos.");
console.log("Votos nulos: " + nulo + "votos.");

let vencedor;
let maiorVotos = Math.max(candX, candY, candZ);
if (maiorVotos === candX) {
  vencedor = "Candidato X";
} else if (maiorVotos === candY) {
  vencedor = "Candidato Y";
} else if (maiorVotos === candZ) {
  vencedor = "Candidato Z";
} else {
  vencedor="Não tivemos um vencedor (houve um empate ou todos os votos foram nulos/brancos";
}

console.log("Vencedor: " + vencedor);

}

eleicao();
