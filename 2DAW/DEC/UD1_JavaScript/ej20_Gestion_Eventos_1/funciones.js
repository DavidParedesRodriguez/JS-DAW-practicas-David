document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'F12') { // ALT + F12
        const marcaTiempo = new Date().getTime();
        const imagenAleatoriaURL = `https://source.unsplash.com/random?t=${marcaTiempo}`;
        document.getElementById('imagen').style.backgroundImage = `url("${imagenAleatoriaURL}")`;
    }
});