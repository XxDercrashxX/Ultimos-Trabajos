const miImagen = document.getElementById("imagen-toggle");
let estadoAlterno = false;

miImagen.addEventListener("click", () => {
  if (estadoAlterno === false) {
    miImagen.src = "imagen2.jpg";
    estadoAlterno = true;
  } else {
    miImagen.src = "imagen1.jpg";
    estadoAlterno = false;
  }
});
