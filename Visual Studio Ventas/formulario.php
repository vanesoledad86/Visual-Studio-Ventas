<?php
$dbc = mysqli_connect("www.ldnagore.com.ar", "ldnagore_dnagore", "Mjmc29051990", "ldnagore_asistencia");
if(!$dbc) {
die("DATABASE CONNECTION FAILED:" .mysqli_error($dbc));
exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $intereses = $_POST["intereses"];
    if (!empty($intereses)) {
        // Procesar los valores seleccionados (por ejemplo, convertirlos en una cadena para almacenar en la base de datos)
        $interes = implode(", ", $intereses);
        // Ahora puedes utilizar $intereses_str o $intereses para trabajar con los intereses seleccionados
    } else {
        echo "Por favor, seleccione al menos un interés.";
    }
    $comentario = $_POST["comentario"];
    $genero = isset($_POST["genero"]) ? $_POST["genero"] : "";



$query = "INSERT INTO contacto (nombre, apellido, email, genero, interes, comentario) VALUES ('$nombre', '$apellido', '$email','$genero', '$interes', '$comentario')"; 


if(mysqli_query($dbc, $query)){
echo "Se insertaron los datos  ";
} 
else{
echo "ERROR: Could not able to execute". $query." ". mysqli_error($dbc);
}
mysqli_close($dbc);
}
?>