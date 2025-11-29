const textoInput = document.getElementById('textoInput');
const btnMayusculas = document.getElementById('btnMayusculas');
const btnMinusculas = document.getElementById('btnMinusculas');
const resultado = document.getElementById('resultado');

btnMayusculas.addEventListener('click', () => {
    resultado.textContent = textoInput.value.toUpperCase();
});

btnMinusculas.addEventListener('click', () => {
    resultado.textContent = textoInput.value.toLowerCase();
});