'use strict';

/**
 * @ngdoc overview
 * @name gr8app2015App
 * @description
 * # gr8app2015App
 *
 * Main module of the application.
 */
angular
  .module('gr8conf2015', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smoothScroll',
    'config'
  ])
  .config(function ($routeProvider, CONFERENCE) {
    console.debug(CONFERENCE);
    var base = 'views/' + CONFERENCE.base;
    $routeProvider
      .when('/', {
        templateUrl: base + '/main.html',
        controller: 'MainCtrl',
        active: 'main'
      })
      .when('/main', {
        templateUrl: base + '/main.html',
        controller: 'MainCtrl',
        active: 'main'
      })
      .when('/venue', {
        templateUrl: base + '/venue.html',
        controller: 'VenueCtrl',
        active: 'venue'

      })
      .when('/about', {
        templateUrl: base + '/about.html',
        controller: 'AboutCtrl',
        active: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
