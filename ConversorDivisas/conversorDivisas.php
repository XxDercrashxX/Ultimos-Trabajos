<?php
define("TIPO_CAMBIO_USD", 18.50);

if (isset($_POST['pesos'])) {
    $pesos = (float)$_POST['pesos'];
    $dolares = $pesos / TIPO_CAMBIO_USD;
    $resultado_formateado = number_format($dolares, 2);

    echo "$pesos MXN equivalen a $resultado_formateado USD";
}
