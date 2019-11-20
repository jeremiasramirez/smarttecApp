<?php
    session_start();
    if( isset($_SESSION["secure"]) && $_SESSION["secure"] = "secure" ){
        header("Location: ../");
    }




?>

 <!DOCTYPE html>
 <html lang="es">
 <head>
 	<meta charset="UTF-8">
 	<title>Login | smartTecApp</title>
 </head>
 <body>



 </body>
 </html>