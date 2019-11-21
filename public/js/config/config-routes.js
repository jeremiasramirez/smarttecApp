/*
* ~ ~ ~ ~   config routes   ~ ~ ~ ~
* */
smartTecApp.config(["$routeProvider", function($routeProvider){

    $routeProvider
        /*
        *       ~~~   route 1    ~~~
        * */
        .when("/", {

            templateUrl: "public/views/view-main.html",
            controller: "mainController"

        });

        /*
        *       ~~~   route 2    ~~~
        * /
        // .when("/", {
        //
        // })
        //



}]);
