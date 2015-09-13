angular
  .module("myApp", [])
  .controller("MyController", ['$scope', function($scope) {
    $scope.name = "Thomas";
  }]);
