const dataAlvo = new Date("2026-05-26T12:00:00").getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    if (diferenca <= 0) {
        document.querySelector('.contador').innerHTML = "<h2>Chegou a hora!</h2>";
        clearInterval(intervalo);
        return;

    };
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();

const imagens = Array.from({ length: 11 }, (_, i) => `./imgs/gta6-${i+1}.jpg`);
const slideshow = document.getElementById("slideshow");

imagens.forEach((url, i) => {
    const img = document.createElement("img");
    img.src = url;
    if (i === 0) img.classList.add("active");
    slideshow.appendChild(img);

});

let indiceAtual = 0;
setInterval(() => {
    const imgs = document.querySelectorAll(".background-slideshow img");
    imgs[indiceAtual].classList.remove("active");
    indiceAtual = (indiceAtual + 1) % imgs.length;
    imgs[indiceAtual].classList.add("active");

}, 4000);