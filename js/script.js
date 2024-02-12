function generarRespuesta(respuesta) {
    var respuestaElemento = document.getElementById("respuestaTexto");
    respuestaElemento.innerHTML = respuesta;
}

function moverAleatoriamente() {
    var botonNo = document.getElementById("botonNo");
    var posicionX = Math.random() * (window.innerWidth - botonNo.clientWidth);
    var posicionY = Math.random() * (window.innerHeight - botonNo.clientHeight);

    botonNo.style.position = "absolute";
    botonNo.style.left = posicionX + "px";
    botonNo.style.top = posicionY + "px";
}
