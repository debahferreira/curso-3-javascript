function titulo() {
    console.log('Olá, mundo!');
}
titulo();

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome(prompt('Qual o seu nome?'));

function dobroDoNumero(numero) {
    return numero * 2;
}
let retornoDoNumero = dobroDoNumero(2)
console.log(retornoDoNumero);

function dobroDoNumero(numero) {
    console.log(numero * 2);
}
dobroDoNumero(4);

function mediaTresNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}
let resultado = mediaTresNumeros(1, 4, 7);
console.log(resultado);

function encontrarMaior(a, b) {
    return a > b ? a : b;
}
let exibirMaior = encontrarMaior(23, 11);
console.log(exibirMaior);

function multiplicacao(numeroAMultiplicar) {
    return numeroAMultiplicar * numeroAMultiplicar;
}
let numeroMultiplicado = multiplicacao(12);
console.log(numeroMultiplicado);