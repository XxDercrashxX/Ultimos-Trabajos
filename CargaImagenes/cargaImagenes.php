<?php
$directorio = "uploads/";
$archivo = $directorio . basename($_FILES["archivo_subido"]["name"]);
$tipo = $_FILES["archivo_subido"]["type"];
$tamano = $_FILES["archivo_subido"]["size"];
$temp = $_FILES["archivo_subido"]["tmp_name"];

if ($tamano > 2097152) {
    echo "Error: El archivo es muy grande (límite 2MB).";
} elseif ($tipo != "image/jpeg" && $tipo != "image/png") {
    echo "Error: Solo se permiten archivos JPG o PNG.";
} else {
    if (move_uploaded_file($temp, $archivo)) {
        echo "Imagen subida con éxito:<br>";
        echo "<img src='" . $archivo . "' style='max-width: 400px;'>";
    } else {
        echo "Error al guardar el archivo en la carpeta.";
    }
}
