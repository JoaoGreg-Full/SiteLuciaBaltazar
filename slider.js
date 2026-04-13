const slides = document.querySelectorAll('.slider-box');
const dots = document.querySelectorAll('.btn-nav');
const btnNext = document.getElementById('proxima');
const btnPrev = document.getElementById('anterior');

let slideAtual = 0;

// Função para atualizar a visualização
function mostrarSlide(index) {

    slides.forEach(slide => slide.classList.remove('ativo'));
    dots.forEach(dot => dot.classList.remove('ativo'));

    if (index >= slides.length) slideAtual = 0;
    else if (index < 0) slideAtual = slides.length - 1;
    else slideAtual = index;

    slides[slideAtual].classList.add('ativo');
    dots[slideAtual].classList.add('ativo');
}

btnNext.addEventListener('click', () => {
    mostrarSlide(slideAtual + 1);
});

btnPrev.addEventListener('click', () => {
    mostrarSlide(slideAtual - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        mostrarSlide(index);
    });
});

setInterval(() => {
    mostrarSlide(slideAtual + 1);
}, 7000);