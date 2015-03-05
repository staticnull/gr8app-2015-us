'use strict';

angular.module('gr8conf2015').service('storage', ['$log', '$rootScope', function ($log, $rootScope) {

  // Public API here
  return {
    get: function (key, failed) {
      // TODO: Hack , Fix: make sure not to encode undefined on put
      var value = localStorage[key];

      if (value == "undefined")
        return undefined;

      var result = angular.fromJson(localStorage[key]);
      return result;
    },
    put: function (key, value) {
      localStorage[key] = angular.toJson(value);

      $rootScope.$broadcast('storage.put.'+key, value)

    },
    remove: function (key) {
      localStorage.removeItem(key);
      $rootScope.$broadcast('storage.remove', key)
    },

    reset: function () {
      localStorage.clear();
      $rootScope.$broadcast('storage.reset')
    }
  };
}]);
