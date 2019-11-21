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

    <!-- viewport -->
     	<meta name="viewport" content="width=device-width,
     	            user-scalable=no,
     	            initial-scale=1.0,
     	            maximum-scale=1.0,
     	            minimum-scale=1.0">

    <!--    styles css  -->

    <!--    own library -->
    <link rel="stylesheet" href="../public/css/lib/jeremias-lib/jeremias-lib.css" />

    <!--    login   -->
    <link rel="stylesheet" href="../public/css/login.css" />

    <!--    icon   -->
    <link rel="stylesheet" href="../public/css/login.css" />


 </head>
 <body>




    <!--    login script    -->
    <script src="../public/js/lib/login/login.js">   </script>

    <!--    easy dom    -->
    <script src="../public/js/lib/easydom/easydom.js">  </script>



 </body>
 </html>