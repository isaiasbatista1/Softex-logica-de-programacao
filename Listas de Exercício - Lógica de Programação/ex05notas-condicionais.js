let nota1 = parseFloat(prompt("Digite a primeira nota: ")) 
let nota2 = parseFloat(prompt("Digite a segunda nota: "))

media = (nota1+nota2)/2

if (media < 5) {
    console.log(`Sua média foi ${media},ela é Ruim`)}
else if (media >=5 && media <7) {
    console.log(`Sua média foi ${media}, ela é Regular`)}
else if (media >=7 & media <8) {
    console.log(`Sua média foi ${media}, ela é Boa`)}
else if(media>= 8 && media <9.5){
    console.log(`Sua média foi ${media}, ela é Ótima`)}
else if(media >=9.5){
    console.log(`Sua média foi ${media}, ela é Excelente`)}
else{
    console.log("Tá lascado, parça")
}                
 
