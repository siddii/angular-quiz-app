'use strict';

/* Filters */
angular.module('quiz-app.filters', [])
  .filter('timerDisplay', function(dateFilter) {
    var ONE_SECOND = 1000; //in milliseconds
    var ONE_MINUTE = ONE_SECOND * 60;
    var TWO_MINUTE = ONE_MINUTE * 2;
    var ONE_HOUR = ONE_MINUTE * 60;
    return function(elapsedTime) {
      if (elapsedTime < ONE_SECOND) {
        return dateFilter(elapsedTime, "s 'second'")
      }
      else if (elapsedTime > ONE_SECOND && elapsedTime < ONE_MINUTE) {
        return dateFilter(elapsedTime, "s 'seconds'")
      }
      else if (elapsedTime > ONE_MINUTE && elapsedTime < TWO_MINUTE) {
        return dateFilter(elapsedTime, "m 'minute' & s 'seconds'");
      }
      else if (elapsedTime > TWO_MINUTE && elapsedTime < ONE_HOUR) {
        return dateFilter(elapsedTime, "m 'minutes' & s 'seconds'");
      }
      return dateFilter(elapsedTime, "h 'hour(s)', m 'minute(s)', s 'second(s)'");
    }
});