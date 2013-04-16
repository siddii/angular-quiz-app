'use strict';

/* Directives */
angular.module('quiz-app.directives', [])
  .directive('timer', function($timeout, dateFilter) {
    return  {
      restrict: 'E',
      templateUrl: 'templates/timer.html',
      replace: true,
      link: function(scope, element, attrs) {
      var startTime = new Date();
      var format = "m 'minute(s)', s 'seconds'",  // date format
        timeoutId;

      function updateTime() {
        var timeElapsed = new Date() - startTime;
        //element.text(dateFilter(timeElapsed, format));
        scope.timeTaken = dateFilter(timeElapsed, format);
      }

      function updateLater() {
        timeoutId = $timeout(function() {
          updateTime();
          updateLater();
        }, 1000);
      }

      element.bind('$destroy', function() {
        $timeout.cancel(timeoutId);
      });

      updateTime();
      updateLater();
    }
  }
});
