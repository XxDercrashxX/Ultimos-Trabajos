<?php
$num1 = (float)$_POST['numero1'];
$num2 = (float)$_POST['numero2'];
$operacion = $_POST['operacion'];
$resultado = 0;

switch ($operacion) {
    case "suma":
        $resultado = $num1 + $num2;
        echo "El resultado de la suma es: " . $resultado;
        break;

    case "resta":
        $resultado = $num1 - $num2;
        echo "El resultado de la resta es: " . $resultado;
        break;

    case "multiplicacion":
        $resultado = $num1 * $num2;
        echo "El resultado de la multiplicacion es: " . $resultado;
        break;

    case "division":
        if ($num2 == 0) {
            echo "Error: No se puede dividir entre cero.";
        } else {
            $resultado = $num1 / $num2;
            echo "El resultado de la division es: " . $resultado;
        }
        break;

    default:
        echo "Operación no válida.";
        break;
}
