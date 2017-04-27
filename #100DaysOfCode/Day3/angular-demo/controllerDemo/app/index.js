
//Create the module

var myApp = angular.module('app', [])
            .controller('titleController',($scope)=>{
                $scope.data = {
                  title: 'Angular',
                  content: 'Haki'
                };
            })
            .controller('userController', ($scope)=>{
              $scope.user = {
                name: 'haki',
                age: 25,
                email: 'haki@gmail.com'
              }
            });
