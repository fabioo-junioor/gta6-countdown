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

const imagens = [
  "https://s2-techtudo.glbimg.com/YEVaA7xV5kO-VW02sOvAzW1Ifnk=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/7/t/sCh5YHRoGuebU0dlzMGA/gta-6-wallpaper-playbox36-deviant-art.jpg",
  "https://sm.ign.com/ign_br/gallery/g/gta-6-key-/gta-6-key-arts-hidden-map_eehd.jpg",
  "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FCal_Hampton_landscape.b1bc01a4.jpg&w=3840&q=75",
  "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_02_landscape.8aced7fd.jpg&w=3840&q=75",
  "https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_landscape.9070b529.jpg",
  "https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_05.921c79be.jpg",
  "https://www.rockstargames.com/VI/_next/static/media/Boobie_Ike_01.8aee3bef.jpg",
  "https://www.rockstargames.com/VI/_next/static/media/Real_Dimez_02.0ea0477d.jpg",
  "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FBrian_Heder_01.10393e61.jpg&w=1920&q=75"
];

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

}, 6000);