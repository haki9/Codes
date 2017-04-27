
var app = angular.module('app',[])
          .controller('formController', ($scope)=>{
            $scope.message = {
              title: 'May Tinh',
              lbTitle1: 'So thu 1',
              lbTitle2: 'So thu 2',
              phepCong: 'Phep Cong:',
              phepTru: 'Phep Tru:',
              phepNhan: 'Phep Nhan:',
              phepChia: 'Phep Chia'
            };
            
            $scope.styleresult = 'display:none';

            $scope.show_result = function(){
              if ($scope.calForm.$valid) {
                $scope.styleresult = 'display:block';
                return $scope.result  = {
                  phepCong: parseInt($scope.num1) + parseInt($scope.num2),
                  phepTru: parseInt($scope.num1) - parseInt($scope.num2),
                  phepNhan: parseInt($scope.num1) * parseInt($scope.num2),
                  phepChia: parseInt($scope.num1) / parseInt($scope.num2)
                }
              }else{
                return $scope.styleresult = 'display:none';
              }
            }
          });
