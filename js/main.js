const slider = document.getElementById('slider');
const slides = document.querySelectorAll('#slider a');

let idx = 0;

function carousel() {
    slides[idx].classList.remove('ativo');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('ativo');
}


setInterval(carousel, 3000);

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("pagina-carregada");
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");
            if (!targetUrl || targetUrl.startsWith("#") || link.getAttribute("target") === "_blank") {
                return;
            }

            e.preventDefault();
            document.body.classList.add("pagina-saindo");
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    });
});

// Funções de interação para a página de competições
function limpaTela() {
    document.querySelectorAll(".ativo").forEach(elemento => {
        elemento.classList.add('escondido');
    });
}

function voltaTudo() {
        document.querySelectorAll(".ativo").forEach(elemento => {
        elemento.classList.remove('escondido');
        
    });
}

// Abre o formulário ou seção solicitada no modal da página de competições
function mostraFormulario(idSecao) {
    limpaTela();
    const secaoAlvo = document.getElementById(idSecao);
    secaoAlvo.classList.add('ativo');
}

// Fecha o formulário aberto e retorna à visualização principal
function fecharFormulario(idSecao) {
    document.getElementById(idSecao).classList.remove('ativo');
    voltaTudo();
}