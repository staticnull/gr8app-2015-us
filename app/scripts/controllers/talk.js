'use strict';

angular.module('gr8conf2015').controller('TalkCtrl', ['$scope', '$routeParams', 'backendService', function ($scope,  $routeParams,  backendService) {
  $scope.talk = backendService.getTalk($routeParams.id);

}]);
