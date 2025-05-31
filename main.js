const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const tempos = [
    new Date("2025-06-15T00:00:00"), // Vestibular UDESC
    new Date("2025-11-09T00:00:00"), // ENEM
    new Date("2025-07-01T00:00:00")  // Férias Julho
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const tempoFinal = tempoObjetivo - agora;

    if (tempoFinal <= 0) return [0, 0, 0, 0];

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}

function atualizaCronometros() {
    for (let i = 0; i < tempos.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById(dias${i}).textContent = dias;
        document.getElementById(horas${i}).textContent = horas;
        document.getElementById(min${i}).textContent = minutos;
        document.getElementById(seg${i}).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometros();
    setInterval(atualizaCronometros, 1000);
}

comecaCronometro();
