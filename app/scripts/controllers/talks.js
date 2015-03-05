'use strict';

angular.module('gr8conf2015').controller('TalksCtrl', ['$scope', 'storage', function ($scope, storage) {
  $scope.$on('storage.put.talks', function (event, args) {
    $scope.talks = args;
  });

  $scope.talks = storage.get('talks');
}]);
