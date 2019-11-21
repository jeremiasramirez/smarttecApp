/*
* main controller app
* */

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){


    $scope.data = [];


    $scope.createPerson = function(idObj, nameObj, emailObj, numberObj, city , site, company){

        if( (( idObj = undefined ) === true) || ( nameObj === undefined ) || ( emailObj === "" ) || ( numberObj === "" ) || (city === "") || (site === "") || (company === "") ){
            floatNotificationError("fields are not accepted");
        }

        else{

            $scope.newPerson = {

                id: idObj,
                name: nameObj,
                email: emailObj,
                number: numberObj,
                address: {
                    city: city
,                },
                company: {
                    name: company
                },
                website: site

            };

            $scope.data.push($scope.newPerson);

        }
    };

    $scope.statusMsj = 0;
    /*http request*/
    $http({


        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"


    }).then((res) => {


        $scope.data = res.data;
        $scope.statusMsj = 1;

    });


    $scope.hideEdition = 0;

    $scope.showOrHide = function(){

        if($scope.hideEdition === 1){
            $scope.hideEdition = 0;
        }



    };













    /**
     * functions - removeContacts
     * */

    $scope.removeContact = function(name){

        floatNotificationError("Deleting " + name);

        let allContacts = document.querySelectorAll("#container__contact");
        let fatherEl = document.getElementById("container__contact");


        for(let i=0; i<allContacts.length; i++) {
            allContacts[i].addEventListener("click", function (e) {


                fatherEl.remove();


            }, false)

        }

    };





    $scope.hideCreateContact = 1;
    $scope.hideCreated  = function(){
        if($scope.hideCreateContact === 1){
            $scope.hideCreateContact = 0;
        }
        else{
            $scope.hideCreateContact = 1;
        }
    };



    $scope.showMoreHide = 0;
    $scope.showMore = function(){

        if($scope.showMoreHide === 1){
            $scope.showMoreHide = 0;
        }
        else{
            $scope.showMoreHide = 1;
        }

    }




}]);