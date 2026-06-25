 Aguarda o DOM carregar completamente
document.addEventListener(DOMContentLoaded, () = {
    
     --- 1. EFEITO DIGITAÇÃO (TYPEWRITER) NO SUBTÍTULO ---
    const subtitleElement = document.querySelector(.subtitle);
    if (subtitleElement) {
        const originalText = subtitleElement.textContent;
        subtitleElement.textContent = ;  Limpa o texto inicial
        let index = 0;

        function typeWriter() {
            if (index  originalText.length) {
                subtitleElement.textContent += originalText.charAt(index);
                index++;
                 Velocidade da digitação (em milissegundos)
                setTimeout(typeWriter, 40); 
            }
        }
         Inicia o efeito
        typeWriter();
    }

     --- 2. INTERATIVIDADE RETRÔ NOS CARDS (SISTEMA DE DICAS) ---
    const cards = document.querySelectorAll(.retro-grid .retro-card);
    const footerText = document.querySelector(.pixel-art-text);

     Dicas personalizadas para cada tipo de card
    const tips = {
        AGRO FORTE DICA O uso de drones reduz o desperdício de defensivos em até 80%! 🎯,
        MEIO AMBIENTE DICA A rotação de culturas recupera os nutrientes do solo naturalmente! 🌾
    };

    cards.forEach(card = {
        const cardTitle = card.querySelector(h3).textContent.trim();

         Quando o mouse entra no card
        card.addEventListener(mouseenter, () = {
            if (tips[cardTitle]) {
                footerText.style.animation = none;  Pausa o piscar temporariamente
                footerText.textContent = tips[cardTitle];
                footerText.style.color = var(--accent-yellow);
            }
        });

         Quando o mouse sai do card
        card.addEventListener(mouseleave, () = {
            footerText.style.animation = blink 1s infinite;  Volta a piscar
            footerText.textContent = INSERT COIN TO CONTINUE;
            footerText.style.color = var(--agro-brown);
        });
        
         Suporte para clique em dispositivos móveis
        card.addEventListener(click, () = {
            if (tips[cardTitle]) {
                footerText.textContent = tips[cardTitle];
                footerText.style.color = var(--accent-yellow);
            }
        });
    });

     --- 3. LOG DE INICIALIZAÇÃO NO CONSOLE ---
    console.log(%c[AGRINHO 2026] Jogo iniciado com sucesso!, color #f0a500; font-weight bold; background-color #2b1e17; padding 5px 10px; border-radius 4px;);
});