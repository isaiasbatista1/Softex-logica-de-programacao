const pi = 3.1415

function calcularArea(raio){
    return 4 * pi * raio ** 2
}

function calcularVolume(raio){
    return (4 / 3) * pi * raio ** 3
}

let raio = parseFloat(prompt("Digite o valor do raio da esfera: "))

if(!isNaN(raio) && raio >= 0){
    const area = calcularArea(raio)
    const volume = calcularVolume(raio)

    console.log(`A área da superfície da esfera é ${area.toFixed(2)}`)
    console.log(`O volume da esfera é ${volume.toFixed(2)}`)
}else {
    console.log("Digite um valor válido para o raio.")
}

