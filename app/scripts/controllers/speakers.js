'use strict';

angular.module('gr8conf2015').controller('SpeakersCtrl', ['$scope', 'storage', function ($scope, storage) {
  $scope.$on('storage.put.speakers', function (event, args) {
    $scope.speakers = args;
  });
  $scope.$on('storage.put.featuredSpeakers', function (event, args) {
    $scope.featuredSpeakers = args;
  });

  $scope.speakers = storage.get('speakers');
  $scope.featuredSpeakers = storage.get('featuredSpeakers');
}]);
