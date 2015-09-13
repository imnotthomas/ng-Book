angular.module('app', [])
  .controller('FirstController', function($scope){
    $scope.counter = 0;
    $scope.add = function(n){
      $scope.counter += n;
    };

    $scope.subtract = function(n){
      $scope.counter -= n;
    };
  });
