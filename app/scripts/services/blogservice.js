angular.module('gr8conf2015')
  .service('blogService', ['$http', '$log', 'CONFERENCE', function ($http, $log, CONFERENCE) {
    var numberOfPosts = -1;

    this.getBlogs = function (limit, offset, callback) {
      if (typeof offset == "function") {
        callback = offset;
        offset = 0;
      }
      if (typeof limit == "function") {
        callback = limit;
        limit = 3;
        offset = 0
      }
      $http.get("http://api.tumblr.com/v2/blog/" + CONFERENCE.blogUrl + "/posts", {params: {"api_key": CONFERENCE.blogApiKey, "limit": limit, "offset": offset, "type": "text"}})
        .success(function (data) {
          updateAndCallback(data, callback);
        }).error(function (data) {
          console.error(data);
        });
    };
    this.getBlog = function (id, callback) {
      if (typeof callback != "function") {
        $log.warn("Not called with id and callback");
        callback({error: "Something is wrong: You did not call with id and callback"});
      }
      $http.get("http://api.tumblr.com/v2/blog/" + CONFERENCE.blogUrl + "/posts", {params: {"api_key": CONFERENCE.blogApiKey, id: id}})
        .success(function (data) {
          updateAndCallback(data, callback);
        }).error(function (data) {
          console.error(data);
        });
    };
    function updateAndCallback(data, callback) {
      if (data.meta.status == 200) {
        numberOfPosts = data.response.blog.posts;
        callback(data.response);
      } else {
        callback(data.meta)
      }

    }

  }]);
