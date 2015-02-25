'use strict';

angular.module('gr8conf2015')
  .service('dataService', ['$http', 'API', 'CONFERENCE', function ($http, API, CONFERENCE) {

    this.getCode = function (callback) {
      $http.get(API.getCode)
        .success(function (data) {
          callback(data)
        }).error(function (data) {
          console.error(data)
        });
    };

    this.getUser = function (oauth, callback) {
      $http.get(API.getUser, {params: oauth})
        .success(function (data) {
          callback(data)
        }).error(function (data) {
          console.error(data)
        });
    }
  }]);
