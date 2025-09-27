let campoChute = document.getElementById("campoChute");
let botaoChutar = document.getElementById("botaoChutar");
let mensagem = document.getElementById("mensagem");

let numeroSecreto;

function iniciarjogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    mensagem.textContent = "";
    campoChute.value = "";
    botaoChutar,textContent = "Chutar!";

    campoChute.disabled = false;
    campoChute.focus();
    console.log(numeroSecreto);
   
    botaoChutar.removeEventListener("click", iniciarjogo);
    botaoChutar.addEventListener("click", verificarChute)
}

function verificarChute() {
    let chute = parseInt(campoChute.value);

    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagem.textContent = "Por favor digite um número entr 1 e 100 ;)";
        mensagem.style.color = 'white'

        campoChute.value = '';
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou o número! O número era " + numeroSecreto + "!";
        mensagem.style.color = 'white'

        finalizarJogo();
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "Oh... muito baixo, talvez um pouco mais alto?"
        mensagem.style.color = 'white'
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "Minha nossa! Muito alto tente mais baixo"
        mensagem.style.color = 'white'
    }

    campoChute.value = '';
    campoChute.focus();

}

function finalizarJogo() {
    campoChute.disabled = true;

    botaoChutar.textContent = 'Jogue novamente!'

    botaoChutar.removeEventListener('click', verificarChute);
    botaoChutar.addEventListener('click', iniciarjogo());
}

iniciarjogo();