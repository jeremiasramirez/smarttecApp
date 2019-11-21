<?php

    /*
        ~   future code   ~
    */

?>

<!DOCTYPE html>
 <html lang="es" ng-app="smartTecApp">
 <head>
 	<meta charset="UTF-8">

 	<!--    title app   -->
 	<title> smartTecApp | APP </title>

    <!-- viewport -->
     	<meta name="viewport" content="width=device-width,
     	            user-scalable=no,
     	            initial-scale=1.0,
     	            maximum-scale=1.0,
     	            minimum-scale=1.0">

    <!-- **********    styles css    ********* -->

    <!--    own library -->
    <link rel="stylesheet" href="public/css/lib/jeremias-lib/jeremias-lib.css" />

    <!--    main css   -->
    <link rel="stylesheet" href="public/css/main.css" />

    <!--    icon   -->
    <link rel="stylesheet" href="public/css/lib/fontawesome/css/all.css" />

    <!--    easy dom css   -->
    <link rel="stylesheet" href="public/css/lib/easydom/easydom.css" />

    <!--    easy dom js   -->
   <script src="public/js/lib/easydom/easydom.js">  </script>


    <!--    angular  library    -->
    <script src="node_modules/angular/angular.js"> </script>

    <!--    angular > angular - route    -->
    <script src="node_modules/angular-route/angular-route.js"> </script>

    <!--   config app   -->
    <script src="public/js/config/config.js"> </script>
 </head>
 <body>

    <!-- Main menu -->
    <nav>

        <ul class="menu--blue">
            <li> <a href="#!/" class=letter3> smartTecApp </a> </li>
        </ul>

    </nav>







    <!--    data    -->
    <div ng-view>   </div>






 </body>
 </html>