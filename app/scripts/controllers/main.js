'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('MainCtrl', function ($scope, ENV) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      ENV.name
    ];
    console.debug(ENV);
  });
