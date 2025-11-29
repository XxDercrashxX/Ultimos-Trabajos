const input = document.getElementById("numeroInput");
const boton = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const valor = parseInt(input.value);

  if (isNaN(valor)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  if (valor % 2 === 0) {
    resultado.textContent = `El número ${valor} es Par.`;
  } else {
    resultado.textContent = `El número ${valor} es Impar.`;
  }
});
