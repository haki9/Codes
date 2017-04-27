
//Create the module

var myApp  = angular.module('myModule', [])
             .controller('myController', ($scope)=>{
               var person = {
                 name: 'haki',
                 age: 25
               };
               $scope.person = person;
             });
