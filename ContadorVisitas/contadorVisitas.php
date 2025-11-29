<?php
$archivo = 'contador.txt';

if (file_exists($archivo)) {
    $conteo = (int)file_get_contents($archivo);
} else {
    $conteo = 0;
}

$conteo++;

file_put_contents($archivo, $conteo);

echo "Esta página ha sido visitada " . $conteo . " veces";
