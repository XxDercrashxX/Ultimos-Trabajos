const formulario = document.getElementById("miFormulario");
const mensaje = document.getElementById("mensajes");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value.trim();

  if (nombre === "" || edad === "" || email === "") {
    mensaje.textContent = "Todos los campos son obligatorios";
    mensaje.style.color = "red";
    return;
  }

  if (parseInt(edad) <= 0) {
    mensaje.textContent = "La edad debe ser mayor a 0";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "Registro enviado correctamente";
  mensaje.style.color = "green";
});
