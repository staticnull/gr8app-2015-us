'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:VenueCtrl
 * @description
 * # VenueCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('VenueCtrl', function ($scope) {
      $scope.removeOverlay = function ($scope, $element) {
        $($element).css('pointer-events','')

    };
  });
