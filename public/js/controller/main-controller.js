/*
* main controller app
* */ 

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){

$scope.conectionActive = function(){



    $scope.data = [];

    $scope.hideCreateContact = 0;

    $scope.createPerson = function(idObj, nameObj, emailObj, numberObj, city , site, company){


        $scope.hideCreateContact =1


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

            $scope.data.unshift($scope.newPerson);

        }

    };





    $scope.statusMsj = 0;
    $scope.timingError = 1;





    /*http request*/

$scope.requested = function(){



     $http({


        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"


    }).then((res) => {


        $scope.data = res.data;
        $scope.statusMsj = 1;

    });
}

$scope.requested()
 


    $scope.hideEdition = 0;

    $scope.showOrHide = function(){

        if($scope.hideEdition === 1){
            $scope.hideEdition = 0;

        }



    };

   

    $timeout(function(){
       
        if($scope.statusMsj === 0){

             
            $scope.conectionMsj = "Failed conection";
            $scope.timingError = 0;
          


        }

    }, 8000)




 console.clear();









    /**
     * functions - removeContacts
     * */

    $scope.removeContact = function(name){

        floatNotificationError("Deleting " + name);

        let allContacts = document.querySelectorAll("#container__contact");
        let fatherEl = document.getElementById("container__contact");


        for(let i=0; i<allContacts.length; i++) {
            allContacts[i].addEventListener("dblclick", function (e) {


                allContacts[i].remove();


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



}
$scope.conectionActive()

 

}]);

