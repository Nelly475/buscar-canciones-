const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const abrirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

funcion pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

funcion cerrarPantallaCompleta() {
    document.exitFullscreen();
}