angular.module('gr8conf2015')
  .service('AuthService',
  ['$rootScope', '$log', 'dataService', 'modalService', 'storage', 'CONFERENCE',
    function ($rootScope, $log, dataService, modalService, storage, CONFERENCE) {
    var currentUser = storage.get('currentUser');
    var oauthResponse;

    return {
      login: function (provider) {
        $log.debug("Login", provider, currentUser);
        currentUser = undefined;
        storage.remove('currentUser');
        dataService.getCode(function (data) {
          var state = data.code;
          OAuth.popup(provider, {state: state}, function (error, result) {
            if (!error) {
              result.provider = provider;
              result.state = state;
              result['conference.id'] = CONFERENCE.id;
              oauthResponse = result;
              $log.debug(result);
              dataService.getUser(result, function (data) {
                $log.debug(data);
                currentUser = data;
                storage.put('currentUser', currentUser);

                $rootScope.$broadcast('login', [currentUser]);
                if (data.status == 412) {
                  modalService.requestUserInfo(data);
                }
                if (data.status == 500) {
                  modalService.showError(data.message)
                }
              })
            } else {
              console.error(error)
            }
          });
        })

      },
      logout: function () {
        currentUser = undefined;
        storage.remove('currentUser');
        $rootScope.$broadcast('logout');

      },
      isLoggedIn: function () {
        return currentUser != undefined && currentUser.status == 200
      },
      currentUser: function () {
        return currentUser;
      },
      relogin: function (name, email) {
        var result = oauthResponse;
        result.name = name;
        result.email = email;
        $log.debug(result);
        dataService.getUser(result, function (data) {
          $log.debug(data);
          storage.put('currentUser', currentUser);
          $rootScope.$broadcast('login', [currentUser]);
          currentUser = data;
          if (data.status == 500) {
            modalService.showError(data.message)
          }
        })
      }
    };
  }]);
