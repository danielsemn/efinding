const slider = document.getElementById('slider');
// Mudança importante: selecionamos os links <a>, que são os blocos dos nossos slides
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