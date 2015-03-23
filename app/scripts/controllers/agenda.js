angular.module('gr8conf2015')
  .controller('AgendaCtrl', ['$scope', '$cookieStore', '$routeParams', 'storage', function ($scope, $cookieStore, $routeParams, storage) {


    $scope.$on('storage.put.agenda', function (event, args) {
      $scope.agenda = args
    });


    $scope.$watch('agenda', function () {
      var agenda = $scope.agenda;
      if (!agenda) return;
      $scope.dayTabWidth = 100 / agenda.length;
    });

    $scope.agenda = storage.get('agenda');
    $scope.currentDay = $routeParams.currentDay || storage.get('currentDay') || $scope.agenda[0].day;

    $scope.$watch('currentDay', function () {
      if (!$scope.currentDay) return;
      storage.put('currentDay', $scope.currentDay);

      $scope.agendaDay = _.find($scope.agenda, function (e) {
        return e.day == $scope.currentDay;
      });

      var day = $scope.agendaDay;
      var breaks = _.find(day.tracks, function (track) {
          return track.allColumns && track.breaks;
        }) || {slots: []};
      var allColumns = _.filter(day.tracks, function (track) {
          return track.allColumns && !track.breaks
        }) || {slots: []};

      var agendaColumns = _.filter(day.tracks, function (track) {
          return !track.allColumns
        }) || [];

      var trackWidth = (100 / agendaColumns.length) + '%';
      var agendaHours = $scope.calculateAgendaHours(day);
      $scope.breaks = breaks;
      $scope.allColumns = allColumns;
      $scope.agendaColumns = agendaColumns;
      $scope.trackWidth = trackWidth;
      $scope.agendaHours = agendaHours;
      $scope.agendaHeight = 60 + agendaHours.length * 60;
    });


    $scope.dayTitle = function (date) {
      return date ? moment(date).format("MMMM D.") : ''
    };

    $scope.activeDay = function(date) {
      return date == $scope.currentDay ? 'active':'';
    };

    $scope.calculateAgendaHours = function (agendaDay) {
      var start = parseInt(moment(agendaDay.start, 'HH:mm:ss').format('HH'));
      var end = parseInt(moment(agendaDay.end, 'HH:mm:ss').format('HH'));
      var endMinutes = parseInt(moment(agendaDay.end, 'HH:mm:ss').format('mm'));
      if (endMinutes > 0) {
        end++;
      }
      return _.range(start, end + 1);
    };
  }]);
