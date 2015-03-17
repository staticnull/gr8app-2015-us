angular.module('gr8conf2015')
  .directive('agendaItem', function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'views/templates/agenda-item.html',
      scope: {
        item: '=',
        startHour: '=',
        color: '=',
        room: '='
      },
      controller: ['$scope', 'backendService', function ($scope, backendService) {
        var item = $scope.item;
        $scope.topValue = (convertTimeToInteger(item.start) - $scope.startHour + 1) * 60;
        $scope.height = (convertTimeToInteger(item.end) - convertTimeToInteger(item.start + 1)) * 60;
        $scope.small = $scope.height < 20 ? 'small-row small' : '';
        $scope.break = $scope.height > 20;
        $scope.start = moment(item.start, 'HH:mm:ss').format('HH:mm');
        $scope.end = moment(item.end, 'HH:mm:ss').format('HH:mm');
        $scope.showRoom = $scope.room != undefined && $scope.room != "";
        $scope.speakers = _.collect(item.speakers, function(speaker) {
          return backendService.getSpeakerById(speaker.id)
        })
      }]
    };
  })
  .directive('agendaTrack', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'views/templates/agenda-track.html'
    };
  }).directive('breakItem', function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'views/templates/agenda-break-item.html',
      scope: {
        item: '=',
        startHour: '=',
        color: '='
      },
      controller: ['$scope', function ($scope) {
        var item = $scope.item;
        $scope.topValue = (convertTimeToInteger(item.start) - $scope.startHour + 1) * 60;
        $scope.height = (convertTimeToInteger(item.end) - convertTimeToInteger(item.start + 1)) * 60;
        $scope.small = $scope.height < 20 ? 'small' : '';
      }]
    };
  }).directive('breakIcon', function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'views/templates/agenda-break-icon.html',
      scope: {
        item: '=',
        startHour: '=',
        color: '='
      },
      controller: ['$scope', function ($scope) {
        var item = $scope.item;
        item.icon = item.icon.replace('food', 'cutlery').replace('icon', 'fa');
        $scope.topValue = (convertTimeToInteger(item.start) - $scope.startHour + 1) * 60;
        $scope.height = (convertTimeToInteger(item.end) - convertTimeToInteger(item.start + 1)) * 60;
        $scope.small = $scope.height < 20 ? 'small' : '';
      }]
    };
  });

function convertTimeToInteger(time) {
  return parseInt(moment(time, 'HH:mm:ss').format('HH')) +
    parseInt(moment(time, 'HH:mm:ss').format('mm')) / 60
}
