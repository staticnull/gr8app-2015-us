angular.module('gr8conf2015')
  .service('modalService', ['$modal', '$window', function ($modal, $window) {
    this.showSponsor = function (sponsor) {
      $modal.open({
        templateUrl: '/views/partials/sponsors/_' + sponsor + '.html',
        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

          $scope.openLink = function (link) {
            $modalInstance.dismiss('cancel');
            $window.open(link);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        }]
      });
    };
    this.requestUserInfo = function (twitterInfo) {
      $modal.open({
        templateUrl: '/views/partials/modal/_userinfo.html',
        controller: ['$scope', '$modalInstance', 'AuthService', function ($scope, $modalInstance, AuthService) {
          $scope.input = {name: twitterInfo.name};

          $scope.save = function () {
            AuthService.relogin(this.input.name, this.input.email);
            $modalInstance.dismiss('cancel')
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]
      })
    };
    this.showBlog = function (blogId) {
      $modal.open({
        templateUrl: '/views/partials/modal/_showblog.html',
        windowClass: 'modalBlog',
        controller: ['$scope', '$modalInstance', 'blogService', function ($scope, $modalInstance, blogService) {
          blogService.getBlog(blogId, function (data) {
            $scope.post = data.posts[0];
          });
          $scope.formatDate = function (date) {
            return moment(date).format('YYYY-MM-DD');
          };
          $scope.open = function (link) {
            $modalInstance.dismiss('cancel');
            $window.open(link);
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]

      })
    };

    this.editRating = function (id) {
      $modal.open({
        templateUrl: '/views/partials/modal/_showrating.html',
        windowClass: 'modalBlog',
        controller: ['$scope', '$rootScope', '$modalInstance', 'backendService', function ($scope, $rootScope, $modalInstance, backendService) {
          var relevanceLevels = ['', "Irrelevant to me", "Not really that relevant, but nice to know.", "It sparked my interest...", "I need to pursuade my boss to use it", "Just what I was looking for!"];
          var qualityLevels = ['', "Poor", "Needs more work.", "This was ok. Average I would say.", "This was pretty good.", "One word: Cool!"];
          var talkLevels = ['', "This was just an overview, right?", "A bit more depth would have been nice", "About right", "I could follow it - unless I blinked", "Way over my head..."];
          var speakerLevels = ['', "Unprepared", "A little more preparation would help", "This was ok. Average I would say.", "Good job indeed", "Skills - he got skills!"];
          $scope.showTalkRelevance = function (level) {
            $scope.talkRelevance = relevanceLevels[level]
          };
          $scope.showTalkQuality = function (level) {
            $scope.talkQuality = qualityLevels[level];
          };
          $scope.showTalkLevel = function (level) {
            $scope.talkLevel = talkLevels[level]
          };
          $scope.showSpeakerQuality = function (level) {
            $scope.speakerQuality = speakerLevels[level];
          };
          $scope.talk = backendService.getTalk(id);
          var firstSpeaker = _.first($scope.talk.speakers);
          $scope.speaker = backendService.getSpeaker(firstSpeaker.id);
          var data = angular.copy(backendService.getRating(id) || {});
          $scope.data = data;

          $scope.showTalkLevel(data.talkLevel);
          $scope.showTalkRelevance(data.talkRelevance);
          $scope.showTalkQuality(data.talkQuality);
          $scope.showSpeakerQuality(data.speakerQuality);

          $scope.save = function () {
            $rootScope.$broadcast('saveRating', [id, $scope.data]);
            $modalInstance.dismiss('cancel');
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]

      })
    };
    this.showError = function (message) {
      $modal.open({
        templateUrl: '/views/partials/modal/_showError.html',
        windowClass: 'modalBlog',
        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
          $scope.message = message;
          $scope.open = function (link) {
            $modalInstance.dismiss('cancel');
            $window.open(link);
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]

      })
    };
    this.login = function () {
      $modal.open({
        templateUrl: '/views/partials/modal/_showLogin.html',
        windowClass: 'modal',
        controller: ['$scope', '$modalInstance', 'AuthService', function ($scope, $modalInstance, AuthService) {
          $scope.login = function (provider) {
            $modalInstance.dismiss('cancel');
            AuthService.login(provider);
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]

      })
    };
    this.logout = function () {
      $modal.open({
        templateUrl: '/views/partials/modal/_showLogout.html',
        windowClass: 'modal',
        controller: ['$scope', '$modalInstance', 'AuthService', function ($scope, $modalInstance, AuthService) {
          $scope.logout = function () {
            AuthService.logout();
            $modalInstance.dismiss('cancel');
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel')
          }
        }]

      })
    }
  }]);
