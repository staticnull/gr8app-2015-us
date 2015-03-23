'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:VenueCtrl
 * @description
 * # VenueCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('RegistrationCtrl', ['$scope','CONFERENCE', function ($scope, CONFERENCE) {
      //$scope.prices = [
      //  {name: 'Regular', university: {dkk: 3275, euro: 435}, conference: {dkk: 4900, euro: 655}},
      //  {name: 'Early Bird', university: {dkk: 2175, euro: 290}, conference: {dkk: 3225, euro: 430 }},
      //  {name: 'Door Buster', }
      //]
    $scope.registrationUrl=CONFERENCE.registrationUrl;
  }]);
