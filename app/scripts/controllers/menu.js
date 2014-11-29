'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('MenuCtrl', function ($scope, CONFERENCE) {
    $scope.menuUrl = 'views/'+CONFERENCE.base+"/templates/menu.html";
  });
