const boton = document.getElementById("btn-generar");
const resultado = document.getElementById("resultado");

const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

boton.addEventListener("click", function () {
  let password = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres.charAt(randomIndex);
  }

  resultado.textContent = "Contraseña: " + password;
});
