angular.module('gr8conf2015')
  .directive('talk', function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'views/templates/talk-template.html',
      scope: {
        talk: '=',
        detailed: '='
      },
      controller: ['$scope','backendService', function($scope, backendService) {
        $scope.getSpeaker = function(speaker) {
          return backendService.getSpeakerById(speaker.id)
        }
      }]
    };
  });
