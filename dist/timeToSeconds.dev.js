"use strict";

// Convert time to seconds (from 8:01:01 to 28861)
function timeToSeconds(hours, minutes, seconds, day) {
  var dayNumber = week.indexOf(day); // Converting time

  var time = dayNumber * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
  return time;
}
//# sourceMappingURL=timeToSeconds.dev.js.map
