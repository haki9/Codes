
//Create the module

var myApp  = angular.module('app', [])
             .controller('myController', ($scope)=>{
               var person = {
                 name: 'haki',
                 age: 25
               };
               $scope.person = person;
             })
             .directive('myDirective', ()=>{
              //  var html = '<h1>This is My Directive</h1>'
              var html = './app/login.html'
               return{
                 templateUrl: html
               }
             })
