const formulario = document.getElementById("formulario-compras");
const lista = document.getElementById("lista-compras");
const inputNombre = document.getElementById("input-nombre");
const inputUrl = document.getElementById("input-url");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = inputNombre.value;
  const urlImagen = inputUrl.value;

  const item = document.createElement("li");

  const imagen = document.createElement("img");
  imagen.src = urlImagen;
  imagen.alt = nombre;

  const texto = document.createElement("span");
  texto.textContent = nombre;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "btn-eliminar";

  botonEliminar.addEventListener("click", function () {
    lista.removeChild(item);
  });

  item.appendChild(imagen);
  item.appendChild(texto);
  item.appendChild(botonEliminar);

  lista.appendChild(item);

  inputNombre.value = "";
  inputUrl.value = "";
});
