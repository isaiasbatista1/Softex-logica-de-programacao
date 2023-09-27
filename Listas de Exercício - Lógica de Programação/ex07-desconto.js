console.log("----- Bem-vindo ao mercado COMPRA POUCO E GANHA NADA -----");

let compras = parseFloat(prompt("Digite o valor do produto: "));
let desconto = (compras / 100) * 10;
let totalComDesconto = compras - desconto;

if (compras >= 1000) {
    console.log(`Sua compra foi no valor de R$ ${compras.toFixed(2)}. 
    Será aplicado um desconto de 10%. O total com desconto é R$ ${totalComDesconto.toFixed(2)}.`);
} else {
    console.log(`Sua compra foi no valor de R$ ${compras.toFixed(2)} e não será aplicado nenhum desconto.`);
}
