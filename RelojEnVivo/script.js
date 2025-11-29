function actualizarReloj() {
const ahora = new Date();

const horaFormateada = ahora.toLocaleTimeString();
document.getElementById('reloj').textContent = horaFormateada;
}
actualizarReloj();
setInterval(actualizarReloj, 1000);
