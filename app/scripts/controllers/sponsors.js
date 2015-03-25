'use strict';

angular.module('gr8conf2015').controller('SponsorsCtrl', ['$scope', 'SPONSORS', function ($scope,  SPONSORS) {
  $scope.sponsorGroups = SPONSORS;
}]);
