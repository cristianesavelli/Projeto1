main.js: const botoes = document.querySelectorAll(".botao");
const conteudos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      conteudos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    conteudos[i].classList.add("ativo");
  };
}

const datasObjetivo = [
  new Date("2025-06-15T00:00:00"), // Vestibular UDESC
  new Date("2025-11-09T00:00:00"), // ENEM
  new Date("2025-07-01T00:00:00"), // Férias
];

function calculaTempo(tempoFinal) {
  const agora = new Date();
  const diferenca = tempoFinal - agora;

  if (diferenca <= 0) return [0, 0, 0, 0];

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return [dias, horas, minutos, segundos];
}

function atualizaCronometros() {
  for (let i = 0; i < datasObjetivo.length; i++) {
    const [d, h, m, s] = calculaTempo(datasObjetivo[i]);
    document.getElementById(dias${i}).textContent = d;
    document.getElementById(horas${i}).textContent = h;
    document.getElementById(min${i}).textContent = m;
    document.getElementById(seg${i}).textContent = s;
  }
}

setInterval(atualizaCronometros, 1000);
