// =============================================================================
// ARCHIVO: funciones.js
// OBJETIVO: Gestionar el despliegue y ocultamiento de las respuestas de FAQ
//            utilizando únicamente conceptos básicos de JavaScript.
// =============================================================================

// Función que alterna (muestra u oculta) una respuesta específica
function alternarRespuesta(idRespuesta, idIcono) {
    // 1. Buscamos en el documento HTML la respuesta y el icono mediante su id
    var respuesta = document.getElementById(idRespuesta);
    var icono = document.getElementById(idIcono);

    // 2. Comprobamos con un condicional si la respuesta ya está visible
    if (respuesta.style.display === "block") {
        // Si está visible (block), la ocultamos cambiando su propiedad display a 'none'
        respuesta.style.display = "none";
        // Cambiamos el símbolo a '+' para indicar que está cerrada
        icono.textContent = "+";
    } else {
        // Si está oculta (none), la mostramos cambiando su propiedad display a 'block'
        respuesta.style.display = "block";
        // Cambiamos el símbolo a '−' para indicar que está abierta
        icono.textContent = "−";
    }
}

// =============================================================================
// ASIGNACIÓN DE EVENTOS 'onclick' A CADA PREGUNTA
// Nota: Como este archivo se vincula con el atributo 'defer' en el <head>,
// se ejecuta cuando el navegador termina de analizar todo el HTML.
// =============================================================================

document.getElementById("pregunta1").onclick = function() {
    alternarRespuesta("respuesta1", "icono1");
};

document.getElementById("pregunta2").onclick = function() {
    alternarRespuesta("respuesta2", "icono2");
};

document.getElementById("pregunta3").onclick = function() {
    alternarRespuesta("respuesta3", "icono3");
};

document.getElementById("pregunta4").onclick = function() {
    alternarRespuesta("respuesta4", "icono4");
};

document.getElementById("pregunta5").onclick = function() {
    alternarRespuesta("respuesta5", "icono5");
};

document.getElementById("pregunta6").onclick = function() {
    alternarRespuesta("respuesta6", "icono6");
};

// =============================================================================
// MENÚ DE NAVEGACIÓN RESPONSIVE (Móvil)
// Permite abrir y cerrar el menú desplegable al presionar el icono de hamburguesa
// =============================================================================
var botonMenu = document.getElementById("botonMenu");
if (botonMenu) {
    botonMenu.onclick = function() {
        var menu = document.getElementById("miTopnav");
        if (menu.className === "topnav") {
            menu.className += " responsive";
        } else {
            menu.className = "topnav";
        }
    };
}
