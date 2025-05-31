const botoes = document.querySelectorAll(".botao");
        const abas = document.querySelectorAll(".aba-conteudo");

        botoes.forEach((botao, i) => {
            botao.addEventListener("click", () => {
                botoes.forEach(b => b.classList.remove("ativo"));
                abas.forEach(a => a.classList.remove("ativo"));
                botao.classList.add("ativo");
                abas[i].classList.add("ativo");
            });
        });

        const tempoUDESC2025 = new Date("2025-06-15T00:00:00"); // UDESC
        const tempoENEM2025 = new Date("2025-11-09T00:00:00"); // ENEM
        const tempoFerias = new Date("2025-07-09T00:00:00"); // FERIAS

        function calculaTempo(tempoObjetivo) {
            const agora = new Date();
            let diff = tempoObjetivo - agora;

            if (diff <= 0) {
                return [0, 0, 0, 0];
            }

            let segundos = Math.floor(diff / 1000);
            let minutos = Math.floor(segundos / 60);
            let horas = Math.floor(minutos / 60);
            let dias = Math.floor(horas / 24);

            segundos %= 60;
            minutos %= 60;
            horas %= 24;

            return [dias, horas, minutos, segundos];
        }

        function atualizaCronometro() {
            // contador UDESC
            const [dias0, horas0, min0, seg0] = calculaTempo(tempoUDESC2025);
            document.getElementById("dias0").textContent = dias0;
            document.getElementById("horas0").textContent = horas0;
            document.getElementById("min0").textContent = min0;
            document.getElementById("seg0").textContent = seg0;

            // contador ENEM
            const [dias3, horas3, min3, seg3] = calculaTempo(tempoENEM2025);
            document.getElementById("dias1").textContent = dias1;
            document.getElementById("horas1").textContent = horas1;
            document.getElementById("min1").textContent = min1;
            document.getElementById("seg1").textContent = seg1;

            // contador Ferias
            const [dias3, horas3, min3, seg3] = calculaTempo(tempoFerias);
            document.getElementById("dias2").textContent = dias2;
            document.getElementById("horas2").textContent = horas2;
            document.getElementById("min2").textContent = min2;
            document.getElementById("seg2").textContent = seg2;
        }

        atualizaCronometro();
        setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
