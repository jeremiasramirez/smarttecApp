/*
* main controller app
* */

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){


    $scope.data = [];

    $scope.newPerson = {
        name: "name",
        email: "jereramirez499@gmail.com",
        number: "numberPhone"
    };

    /*http request*/
    $http({


        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"


    }).then((res) => {

        $scope.data = res.data;


    });





}]);