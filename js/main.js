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