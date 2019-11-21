/*
* main controller app
* */

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){


    $scope.data = [];


    $http({


        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"


    }).then((res) => {


       console.log(res)


    });





}]);