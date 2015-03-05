'use strict';

angular.module('gr8conf2015').controller('SpeakerCtrl', ['$scope', '$routeParams', 'backendService', function ($scope,  $routeParams,  backendService) {
  $scope.speaker = backendService.getSpeaker($routeParams.twitterHandle);

}]);
