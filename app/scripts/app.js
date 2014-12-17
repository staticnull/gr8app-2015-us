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
    'angular-parallax',
    'config'
  ])
  .config(function ($routeProvider, CONFERENCE) {
    console.debug(CONFERENCE);
    var base = 'views/' + CONFERENCE.base;
    $routeProvider
      .when('/', {
        templateUrl: base + '/front.html',
        controller: 'FrontCtrl',
        scroll: 'top'
      })
      .when('/front', {
        templateUrl: base + '/front.html',
        controller: 'FrontCtrl',
        scroll: 'page'
      })
      .when('/venue', {
        templateUrl: base + '/venue.html',
        controller: 'VenueCtrl',
        scroll: 'page'

      })
      .when('/cfp', {
        templateUrl: base + '/cfp.html',
        controller: 'CfpCtrl',
        scroll: 'page'

      })
      .when('/about', {
        templateUrl: base + '/about.html',
        controller: 'AboutCtrl',
        scroll: 'page'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular
  .module('gr8conf2015').run(['$rootScope', 'smoothScroll','CONFERENCE', function($rootScope, smoothScroll, CONFERENCE) {
    $rootScope.scrollToTop = function() {
      var element = document.getElementById('page');
      smoothScroll(element, {offset: 50});
    };
    $rootScope.eventImageCss = 'event-'+CONFERENCE.base;
    $rootScope.logoUrl = 'views/'+CONFERENCE.base + "/templates/logo.html";
    $rootScope.menuUrl = 'views/'+CONFERENCE.base+"/templates/menu.html";
    $rootScope.eventUrl = 'views/'+CONFERENCE.base+"/templates/event.html";
    $rootScope.blogUrl = 'views/'+CONFERENCE.base+"/templates/blog.html";
    $rootScope.socialsUrl = 'views/'+CONFERENCE.base+"/templates/socials.html";
    $rootScope.contactsUrl = 'views/'+CONFERENCE.base+"/templates/contacts.html";

  }]);
