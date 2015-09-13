angular.module('myApp', [])
  .controller('MyController', function($scope, $timeout){
    // will fill this out later
    $scope.name = "Thomas";
    $scope.clock = {};
    var updateClock = function() {
      var date = new Date();
      $scope.clock.now = date.toLocaleString();
      $timeout(function(){
        updateClock();
      },1000);
    };
    updateClock();
  });
