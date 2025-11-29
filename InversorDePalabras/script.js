function invertirTexto() {
  const input = document.getElementById("inputText").value;
  const invertido = input.split("").reverse().join("");
  document.getElementById("resultado").textContent = invertido;
}
