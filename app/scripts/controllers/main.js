'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8app')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
