// Selecciona el elemento switchMode
var switchMode = document.getElementById("switchMode");

// Añade un evento de clic al elemento switchMode
switchMode.addEventListener("click", cambiarModo);

// Define la función para cambiar el modo
function cambiarModo() {
    // Comprueba el color de fondo actual del body
    var colorDeFondo = document.body.style.backgroundColor;

    // Cambia el color de fondo y el emoji dependiendo del color actual
    if (colorDeFondo === "rgb(80, 80, 80)") { // #505050 en formato rgb
        document.body.style.backgroundColor = "white";
        switchMode.textContent = "🌙";
    } else {
        document.body.style.backgroundColor = "#505050";
        switchMode.textContent = "☀️";
    }
}