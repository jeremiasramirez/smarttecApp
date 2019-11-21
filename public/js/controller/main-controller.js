/*
* main controller app
* */

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){


    $scope.data = [];


    $scope.createPerson = function(x,y,z){

        $scope.newPerson = {
            name: x,
            email: y,
            number: z
        };

        $scope.data.push($scope.newPerson);
    };


    /*http request*/
    $http({


        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"


    }).then((res) => {


        $scope.data = res.data;


        console.log(res.data)





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

        for(let i=0; i<allContacts.length; i++){
            allContacts[i].addEventListener("click", function(){

                $timeout(()=>{
                    allContacts[i].remove();
                }, 1500)

            }, false)

        }

    };








}]);