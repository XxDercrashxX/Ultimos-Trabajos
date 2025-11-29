const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
        return;
    }

    const itemLista = document.createElement('li');

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'btn-eliminar';

    botonEliminar.addEventListener('click', function() {
        listaTareas.removeChild(itemLista);
    });

    itemLista.appendChild(spanTexto);
    itemLista.appendChild(botonEliminar);

    listaTareas.appendChild(itemLista);

    inputTarea.value = '';
});