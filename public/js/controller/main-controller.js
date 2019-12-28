/*
* main controller app
* */ 

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){

$scope.conectionActive = function(){



    $scope.data = [];

    $scope.hideCreateContact = 0;

    $scope.createPerson = function(idObj, nameObj, emailObj, numberObj, city , site, company){


        $scope.hideCreateContact =1


        if( ( !idObj ) || ( !nameObj ) || ( !emailObj ) || ( !numberObj ) || (!city) || (!site) || (!company) ){
            floatNotificationError("fields empty");
        }

        else{
             
            $scope.newPerson = {

                id: idObj,
                name: nameObj,
                email: emailObj,
                address: {
                    city: city
,                },
                company: {
                    name: company
                },
                number: numberObj,
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
 console.clear()


    $scope.hideEdition = 0;

    $scope.showOrHide = function(){

        if($scope.hideEdition === 1){
            $scope.hideEdition = 0;

        }



    };


    $scope.buttonReloadApp = "off";
   


    $timeout(function(){
       
        if($scope.statusMsj === 0){

 
            $scope.timingError = 0;
            $scope.buttonReloadApp = "on";
             console.clear()


        }

    }, 8000)

    $scope.reloadApp = function(){
       $scope.conectionActive()
       console.clear();

    }



 









    /**
     * functions - removeContacts
     * */

    $scope.removeContact = function(index, name){

    
        floatNotificationError("Eliminado " + name);
        $scope.data.splice(index, 1);

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

