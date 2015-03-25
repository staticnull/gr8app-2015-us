'use strict';

angular.module('gr8conf2015').controller('SponsorCtrl', ['$scope', '$routeParams', 'SPONSORS', function ($scope,  $routeParams,  SPONSORS) {
  $scope.talk = backendService.getTalk($routeParams.id);

}]);
