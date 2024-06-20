function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(imc.toFixed(3));
}
calcularImc(1.64, 60);

//função fatorial

function dolarEmReais(valor) {
    let converter = valor * 4.80;
    console.log(converter.toFixed(2));

}
dolarEmReais(6);

function areaEPerimetro(alturaSala, larguraSala) {
    let areaDaSala = alturaSala * larguraSala;
    let perimetroDaSala = (2 * alturaSala) + (2 * larguraSala);
    console.log(`A área da sala é ${areaDaSala}, e o perímetro é ${perimetroDaSala}.`);
}
areaEPerimetro(2, 5);

function tabuadaDoNumero(numeroParaTabuada) {
    let multiplicando = 0;
    while(multiplicando <= 10) {
        console.log(numeroParaTabuada * multiplicando);
        multiplicando++;
    }
}
tabuadaDoNumero(5);