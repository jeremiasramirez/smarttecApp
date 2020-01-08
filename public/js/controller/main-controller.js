/*
* main controller app
* */ 

smartTecApp.controller("mainController", [ "$scope" ,"$http", "$timeout", function( $scope, $http,  $timeout ){

$scope.conectionActive = function(){

    $scope.iconSearch = "fas fa-user-plus add";
     

    $scope.iconAdd = "fas fa-search add";
     
    $scope.switchSearch = 0;

    $scope.data = [];
    $scope.hideCreateContact = 0;
    $scope.msjErrorToCreate = 1;

    $scope.add = function(idObj, nameObj, emailObj, numberObj, city , site, company){
        $scope.newPerson = {

             id: idObj,
             name: nameObj,
             email: emailObj,

             address: {
                 city: city
,             },

             company: {
                 name: company
             },

             number: numberObj,
             website: site

          };
             
            $scope.msjErrorToCreate = 1;
            $scope.data.unshift($scope.newPerson);
            $scope.hideCreateContact = 1;
            

    }

  

    $scope.createPerson = function(idObj, nameObj, emailObj, numberObj, city , site, company){

        if( ( !idObj ) || ( !nameObj ) || ( !emailObj ) || ( !numberObj ) || (!city) || (!company) ){
           
            $scope.msjErrorToCreate = 0;

        }

        else{
             
            $scope.add(idObj, nameObj, emailObj, numberObj, city , site, company);
            $scope.msjErrorToCreate = 1;

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



    $scope.execSearch = function(){

        
        if( $scope.switchSearch == 0){
            $scope.switchSearch = 1;
            $scope.iconAdd = "fas fa-times add";
        }
        else{
            $scope.switchSearch = 0;
            $scope.iconAdd = "fas fa-search add";
        }

    }





    $scope.hideCreateContact = 1;

    $scope.hideCreated  = function(){

        $scope.msjErrorToCreate = 1;
        if($scope.hideCreateContact === 1){

            $scope.iconSearch = "fas fa-times add";
             
            
            $scope.hideCreateContact = 0;
        }
        else{

            $scope.iconSearch = "fas fa-user-plus add"
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

