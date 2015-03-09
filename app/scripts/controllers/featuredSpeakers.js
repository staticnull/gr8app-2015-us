'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:FeaturedSpeakersCtrl
 * @description
 * # FeaturedSpeakersCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('FeaturedSpeakersCtrl', ['$scope','storage',function ($scope,storage) {
    $scope.$on('storage.put.featuredSpeakers', function (event, args) {
      $scope.featuredSpeakers = args;
    });

    $scope.featuredSpeakers = storage.get('featuredSpeakers');
  }]);
