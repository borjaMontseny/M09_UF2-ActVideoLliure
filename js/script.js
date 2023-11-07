/* borjaMontseny DAW2 M09 2023 */
var switchMode = document.getElementById("switchMode");

switchMode.addEventListener("click", cambiarModo);

function cambiarModo() {
    var colorDeFondo = document.body.style.backgroundColor;

    if (colorDeFondo === "rgb(16, 16, 16)") { // #101010 en format rgb
        document.body.style.backgroundColor = "white";
        switchMode.textContent = "🌙";
    } else {
        document.body.style.backgroundColor = "#101010";
        switchMode.textContent = "☀️";
    }
}
