'use strict';

angular.module('playNgMaterialApp')
  .controller('MainCtrl', function ($scope, $http, $mdSidenav) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
      };

  })

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
});