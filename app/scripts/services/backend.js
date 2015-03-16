angular.module('gr8conf2015')
  .service('backendService', ['$rootScope', '$http', 'storage', 'AuthService', 'API', 'CONFERENCE', 'ENV', function ($rootScope, $http, storage, AuthService, API, CONFERENCE, ENV) {

    function loadSpeakers(reload) {
      if (reload) {
        $http.get(API.speakers + CONFERENCE.id).
          success(function (data) {
            var featuredSpeakers = _.filter(data, function (speaker) {
              return speaker.featured
            });
            var speakers = data;

            storage.put('featuredSpeakers', featuredSpeakers);
            storage.put('speakers', speakers);
          })
      }
    }

    function loadTalks(reload) {
      if (reload) {
        $http.get(API.talks + CONFERENCE.id).
          success(function (data) {
            storage.put('talks', data);
          })
      }
    }

    function loadTags() {
      $http.get(API.tags + CONFERENCE.id).
        success(function (data) {
          storage.put('tags', data);
        })
    }

    function loadAgenda(reload) {
      if (reload) {
        $http.get(API.agenda + CONFERENCE.id).
          success(function (data) {
            storage.put('agenda', data);
          })
      }
    }

    function loadFavorites() {
      if (AuthService.isLoggedIn()) {
        var user = AuthService.currentUser();
        $http.get(API.loadFavorites, {params: {'conference.id': CONFERENCE.id, uuid: user.uuid}}).
          success(function (data) {
            storage.put('favorites', data);
            $rootScope.$broadcast('loaded', ['favorites', data]);
          })
      }
    }

    function saveFavorite(id, status) {
      if (AuthService.isLoggedIn()) {
        var user = AuthService.currentUser();
        $http.get(API.saveFavorite, {params: {'conference.id': CONFERENCE.id, uuid: user.uuid, 'talk.id': id, status: status}}).
          success(function (data) {
            storage.put('favorites', data);
            $rootScope.$broadcast('saved', ['favorites', data]);
          })
      }

    }

    function loadRatings() {
      if (AuthService.isLoggedIn()) {
        var user = AuthService.currentUser();
        $http.get(API.loadRatings, {params: {'conference.id': CONFERENCE.id, uuid: user.uuid}}).
          success(function (data) {
            storage.put('ratings', data);
            $rootScope.$broadcast('loaded', ['ratings', data]);
          })
      }
    }

    function saveRating(id, data) {
      if (AuthService.isLoggedIn()) {
        var user = AuthService.currentUser();
        var params = angular.extend({}, {'conference.id': CONFERENCE.id, uuid: user.uuid, 'talk.id': id}, data)
        $http.get(API.saveRating, {params: params}).
          success(function (data) {
            storage.put('ratings', data);
            $rootScope.$broadcast('saved', ['ratings', data]);
          })
      }

    }

    this.bootstrap = function () {
      $http.get(API.status + CONFERENCE.id).
        success(function (data) {
          var status = (API.reload ? {} : storage.get('status') || {});
          loadSpeakers(status.speakers != data.speakers);
          loadTalks(status.talks != data.talks);
          loadTags();
          loadAgenda(status.agenda != data.agenda);

          loadFavorites();
          loadRatings();
          storage.put('status', data);

        })
    };

    this.isFavorite = function (id) {
      var favorites = storage.get('favorites') || [];
      return _.some(favorites, function (favorite) {
        return favorite == id
      })
    };

    this.getRating = function (id) {
      var ratings = storage.get('ratings') || [];
      return _.find(ratings, function (rating) {
        return rating.id == id
      })
    };
    this.getTalk = function (id) {
      var talks = storage.get('talks') || [];
      return _.find(talks, function (talk) {
        return talk.id == id
      })
    };
    this.getSpeaker = function (twitterHandle) {
      return _.find(storage.get('featuredSpeakers') || [], function (speaker) {
          return speaker.twitter == twitterHandle
        }) || _.find(storage.get('speakers') || [], function (speaker) {
          return speaker.twitter == twitterHandle
        })
    };
    this.getSpeakerById = function (id) {
      return _.find(storage.get('featuredSpeakers') || [], function (speaker) {
          return speaker.id == id
        }) || _.find(storage.get('speakers') || [], function (speaker) {
          return speaker.id == id
        })
    };

    $rootScope.$on('favorited', function (event, args) {
      var favorites = storage.get('favorites') || [];
      var id = args[0];
      var favorited = args[1];
      if (favorited) {
        favorites.push(id)
      } else {
        favorites = _.reject(favorites, function (favorite) {
          return favorite == args[0]
        })
      }
      storage.put('favorites', favorites);
      saveFavorite(id, favorited);
    });
    $rootScope.$on('saveRating', function (event, args) {
      var id = args[0];
      var data = args[1];
      saveRating(id, data);
    });
    $rootScope.$on('login', function () {
      loadFavorites();
      loadRatings();
    })


  }]);
