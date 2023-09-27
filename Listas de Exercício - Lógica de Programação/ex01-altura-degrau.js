let altdegrau = parseFloat(prompt("Digite a altura do degrau: "));
let alturadesejada = parseFloat(prompt("Digite a altura desejada: "));

let degrausnecessarios = altdegrau / alturadesejada

console.log("Você vai precisar subir" + Math.ceil(degrausnecessarios) + "degraus para chegar ao seu objetivo.");

