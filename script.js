document.addEventListener('DOMContentLoaded', function () {
    const patata = document.getElementById('patata');
    patata.addEventListener('click', enviarPregunta);
    patata.addEventListener('animationend', () => patata.classList.remove('agitar'));
});

function agitarPatata() {
    document.getElementById('patata').classList.add('agitar');
}

function enviarPregunta() {
    const preguntaInput = document.getElementById('questionInput');
    const answerElement = document.getElementById('answer');

    if (preguntaInput && answerElement) {
        const pregunta = preguntaInput.value;
        const respuesta = generarRespuestaAleatoria();
        mostrarRespuesta(respuesta, answerElement);
        document.getElementById('patata').classList.add('agitar');
    }
}

function generarRespuestaAleatoria() {
    const respuestasSi = [
        "¡Sí, por supuesto!",
        "Definitivamente, sí.",
        "¡Absolutamente!",
        "Sí, eso parece probable.",
        "¡Claro que sí!",
        "¡Por supuesto!",
        "Sí, las patatas así lo auguran.",
        "¡La respuesta es sí!",
        "Por supuesto, como las patatas en primavera."
    ];

    const respuestasNo = [
        "No, eso es poco probable.",
        "¡Definitivamente no!",
        "No, las patatas no lo ven así.",
        "¡De ninguna manera!",
        "No, eso no sucederá.",
        "Claro que no, ¡estás loco!",
        "La respuesta es no, las patatas lo descartan.",
        "No, las patatas ven un camino diferente.",
        "No, las patatas no lo creen posible."
    ];

    const respuestasMisterio = [
        "Las patatas prefieren mantener el misterio.",
        "El misterio patatero es profundo.",
        "Las patatas están en silencio, el misterio reina.",
        "Las patatas no revelan todos sus secretos.",
        "En el misterioso mundo de las patatas, las respuestas son inciertas."
    ];

    const respuestasDetalladas = [
        "Las patatas ven un futuro brillante para ti.",
        "En el universo de las patatas, tu destino está lleno de sorpresas.",
        "Las patatas susurran que debes seguir tu corazón.",
        "Tu pregunta ha desencadenado el pensamiento profundo de las patatas.",
        "Las patatas están alineadas a favor de tus sueños más salvajes.",
        "El cosmos de las patatas te sonríe, ¡sigue adelante!",
        "Las patatas dicen que la perseverancia te llevará lejos.",
        "Las patatas aconsejan mirar más allá de lo evidente.",
        "Tus caminos están tejidos en los hilos patateros del destino.",
        "Las patatas sugieren que escuches a tu intuición con más atención."
    ];

    const todasLasRespuestas = respuestasSi.concat(respuestasNo, respuestasMisterio, respuestasDetalladas);

    const respuestaAleatoria = todasLasRespuestas[Math.floor(Math.random() * todasLasRespuestas.length)];
    return respuestaAleatoria;
}

function mostrarRespuesta(respuesta, answerElement) {
    answerElement.innerHTML = respuesta;
}
function modoOscuro() {
    const body = document.body;
    body.classList.toggle('modo-oscuro');
}
function mostrarCreditos() {
    const creditos = document.getElementById('creditos');
    creditos.style.display = creditos.style.display === 'none' ? 'block' : 'none';
}
