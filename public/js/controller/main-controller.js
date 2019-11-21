/*
* main controller app
* */

smartTecApp.controller("mainController", ["dataRequest", "$scope" , "$timeout", function(dataRequest, $scope, $timeout ){

    $scope.name = dataRequest;

    console.log($scope.name)


}]);