'use strict';

angular.module('gr8conf2015').controller('TalksCtrl', ['$scope', 'storage', function ($scope, storage) {


  $scope.$on('storage.put.talks', function (event, args) {
    $scope.talks = filterTalks(args);
  });
  $scope.$on('storage.put.tags', function (event, args) {
    $scope.tags = args;
  });

  $scope.talks = filterTalks(storage.get('talks'));
  $scope.tags = storage.get('tags');

  function filterTalks(data) {
    return data;
  }
}]);
