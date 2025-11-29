const inputEdad = document.getElementById("input-edad");
const boton = document.getElementById("btn-verificar");
const parrafoResultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const edad = parseInt(inputEdad.value);

  if (isNaN(edad)) {
    parrafoResultado.textContent = "Por favor, escribe un número válido.";
    parrafoResultado.style.color = "purple";
    return;
  }

  if (edad >= 18) {
    parrafoResultado.textContent = "Eres mayor de edad.";
    parrafoResultado.style.color = "green";
  } else {
    parrafoResultado.textContent = "Eres menor de edad.";
    parrafoResultado.style.color = "red";
  }
});
