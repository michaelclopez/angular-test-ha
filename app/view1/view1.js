'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', ['$scope',function() {
  $scope.data = {
    make: null,
    makes: [
      { id: 1, name: "ford"},
      { id: 2, name: "acura"}
    ]
  }
}]);
