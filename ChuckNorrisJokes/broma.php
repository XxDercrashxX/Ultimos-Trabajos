<?php
$url = "https://api.chucknorris.io/jokes/random";
$json_data = file_get_contents($url);
$data = json_decode($json_data);
$broma = $data->value;
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris API</title>
</head>

<body>
    <h1>Broma del Día:</h1>
    <p><?php echo $broma; ?></p>
    <br>
    <button onclick="location.reload()">Otra broma</button>
</body>

</html>