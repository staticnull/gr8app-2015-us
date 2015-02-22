'use strict';

/**
 * @ngdoc directive
 * @name gr8app2015App.directive:speaker
 * @description
 * # speaker
 */
angular.module('gr8conf2015')
  .directive('speaker', function () {
    return {
      restrict: "E",
      replace: false,
      templateUrl: 'views/templates/speaker.html',
      scope: {
        speaker: '='
      }
      //,
      //controller: ['$scope','scrollService',function($scope, scrollService) {
      //  $scope.scrollTo = scrollService.scrollTo
      //}]
    };
  });
angular.module('gr8conf2015')
  .directive('speakerCarousel', function () {
    return {
      restrict: "E",
      replace: false,
      templateUrl: 'views/templates/speakerCarousel.html',
      scope: {
        speaker: '='
      }
      //,
      //controller: ['$scope','scrollService',function($scope, scrollService) {
      //  $scope.scrollTo = scrollService.scrollTo
      //}]
    };
  });
