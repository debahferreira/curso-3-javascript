let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado.');
}
function botaoAlert() {
    alert('Eu amo JS');
}
function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${cidade} e lembrei de você.`);
}
function botaoSoma() {
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite um segundo número'));
    alert(`A soma dos números escolhidos é igual a ${numero1 + numero2}.`);
}