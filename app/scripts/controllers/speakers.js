'use strict';

/**
 * @ngdoc function
 * @name gr8app2015App.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the gr8app2015App
 */
angular.module('gr8conf2015')
  .controller('SpeakersCtrl', function ($scope) {
    $scope.speakers = [
      {
        id: 54,
        name: "Graeme Rocher",
        company: "Pivotal",
        twitter: "graemerocher",
        image: "http://cfp.gr8conf.org/profile/img/54",
        bio: "<p>Graeme is the project lead of the Grails project.</p>",
        talks: []
      },
      {
        id: 34,
        name: "Guillaume Laforge",
        company: "Pivotal",
        twitter: "glaforge",
        image: "http://cfp.gr8conf.org/profile/img/34",
        bio: "<p>Guillaume is the project lead of the Groovy programming language project.</p>",
        talks: []
      },
      {
        id: 28,
        name: "Lari Hotari",
        company: "Pivotal Software, Inc.",
        twitter: "lhotari",
        image: "http://cfp.gr8conf.org/profile/img/28",
        bio: "<p>Lari is a Grails Team Member at Pivotal. </p>",
        talks: []
      },
      {
        id: 36,
        name: "Marco Vermeulen",
        company: "Self Employed",
        twitter: "marcoVermeulen",
        image: "http://cfp.gr8conf.org/profile/img/36",
        bio: "<p>Marco is a South African Software Developer who works and lives in London. ",
        talks: []
      },{
        id: 11,
        name: "Peter Ledbrook",
        company: "Self employed",
        twitter: "pledbrook",
        image: "http://cfp.gr8conf.org/profile/img/11",
        bio: "<p>Peter is a long time Java developer, Grails user and plugin author. </p>",
        talks: []
      }
    ]

  });
