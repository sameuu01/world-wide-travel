function abrirMenu() {
    document.getElementById("menu").classList.toggle("show");
}

document.querySelectorAll(".carrossel").forEach(carrossel => {

    const slides = carrossel.querySelectorAll(".slide");
    const btnPrev = carrossel.querySelector(".esquerda");
    const btnNext = carrossel.querySelector(".direita");

    let slideAtual = 0;

    function mostrarSlide(indice) {
        slides.forEach(slide => {
            slide.classList.remove("ativo");
        });

        slides[indice].classList.add("ativo");
    }

    btnNext.addEventListener("click", () => {
        slideAtual = (slideAtual + 1) % slides.length;
        mostrarSlide(slideAtual);
    });

    btnPrev.addEventListener("click", () => {
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        mostrarSlide(slideAtual);
    });

});