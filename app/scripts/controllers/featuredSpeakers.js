'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:FeaturedSpeakersCtrl
 * @description
 * # FeaturedSpeakersCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('FeaturedSpeakersCtrl', function ($scope) {
    $scope.$on('loaded', function(event, args) {
      if (args[0] === "featuredSpeakers") {
        $scope.featuredSpeakers = args[1];
      }
    });
  });
