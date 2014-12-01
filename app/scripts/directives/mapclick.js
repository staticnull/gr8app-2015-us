'use strict';

/**
 * @ngdoc directive
 * @name gr8app2015App.directive:mapClick
 * @description
 * # mapClick
 */
angular.module('gr8conf2015')
  .directive('mapclick', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="map embed-container"><div id="map-notice" style="display: block;">Click to navigate map</div><div class="map-overlay" style="display: block;"></div><div ng-transclude></div></div>',
      link: function postLink(scope, element, attrs) {
        var $element = $(element);
        var $notice = $('#map-notice', $element);
        var $overlay = $('.map-overlay');
        var onMapMouseleaveHandler = function (event) {
          $notice.fadeIn(500);
          var elemento = $(this);
          elemento.on('click', onMapClickHandler);
          elemento.off('mouseleave', onMapMouseleaveHandler);
          $overlay.fadeIn(500);
        };

        var onMapClickHandler = function (event) {
          $notice.fadeOut(500);
          var elemento = $(this);
          elemento.off('click', onMapClickHandler);
          $overlay.fadeOut(500);
          elemento.on('mouseleave', onMapMouseleaveHandler);
        };
        $element.on('click', onMapClickHandler);
      }
    };
  });
