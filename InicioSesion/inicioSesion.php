<?php
if (isset($_POST['numero'])) {
    $num = (int)$_POST['numero'];
    $esPrimo = true;

    if ($num <= 1) {
        $esPrimo = false;
    } else {
        $limite = floor(sqrt($num));
        for ($i = 2; $i <= $limite; $i++) {
            if ($num % $i == 0) {
                $esPrimo = false;
                break;
            }
        }
    }

    if ($esPrimo) {
        echo "El número $num es primo.";
    } else {
        echo "El número $num NO es primo.";
    }
}
