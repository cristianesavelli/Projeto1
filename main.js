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
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-06-15T00:00:00"); //Vest UDESC
const tempoObjetivo2 = new Date("2025-11-09T00:00:00"); //ENEM
const tempoObjetivo3 = new Date("2025-07-01T00:00:00"); //FÉRIAS!!!!!!!

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() { //UDESC
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias0").textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas0").textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min0").textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg0").textContent = calculaTempo(tempos[i])[3];
    }
}
    }
}

function atualizaCronometro() { //ENEM
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias1").textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas1").textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min1").textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg1").textContent = calculaTempo(tempos[i])[3];
    }
}
    }
}

function atualizaCronometro() { //Férias
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias2").textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas2").textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min2").textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg2").textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
