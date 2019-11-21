<?php
    session_start();
//    session_destroy();

    if(isset($_POST["result"]) && $_POST["result"] == 4){
        $_SESSION["secure"] = "secure";
    }

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

    <!--    icon   -->
    <link rel="stylesheet" href="../public/css/lib/fontawesome/css/all.css" />

    <!--    main css   -->
    <link rel="stylesheet" href="../public/css/main.css" />

    <!--    login   -->
    <link rel="stylesheet" href="../public/css/login.css" />


 </head>
 <body>

<div class="containerSecurity">


     <form action="index.php" class="form" method="post">

         <h1 class="titleSecurity">
             SmartTec Security
             <i class="fas fa-shield-alt secure"></i>
         </h1>

         <input type="number" name="result" placeholder="2 + 2 = ?">

         <button class="btn--yes">Validate</button>
     </form>

</div>

    <!--    login script    -->
    <script src="../public/js/lib/login/login.js">   </script>


    <!--    easy dom    -->
    <script src="../public/js/lib/easydom/easydom.js">  </script>



 </body>
 </html>