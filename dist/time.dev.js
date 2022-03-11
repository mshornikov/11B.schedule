"use strict";

// All functions working with getting, converting current time and date
// Convert time to seconds (from 8:01:01 to 28861)
function timeToSeconds(hours, minutes, seconds, day) {
  var dayNumber = week.indexOf(day); // Converting time

  var time = dayNumber * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
  return time;
} // Convert time to usual format (from 28861 to 8:01:01) in two different lengths


function secondsToTime(time, length) {
  var hoursAmount = ~~(time / 24 % 3600 * 24 / 3600) + ~~(time / 24 / 3600) * 24;
  var minutesAmount = ~~(time % 3600 / 60);
  var secondsAmount = ~~(time % 3600 % 60); // Long format hours:minutes:seconds

  if (length == 'long') {
    if (hoursAmount == 0) {
      return minutesAmount.toString() + ':' + zero_first_format(secondsAmount).toString();
    }

    return hoursAmount.toString() + ':' + zero_first_format(minutesAmount).toString() + ':' + zero_first_format(secondsAmount).toString();
  } // Long format minutes:seconds


  if (length == 'short') {
    return minutesAmount.toString() + ':' + zero_first_format(secondsAmount).toString();
  }
} // Getting dayNumber from time


function currentDate(time) {
  return ~~(time / 24 / 3600) % 7;
} // Replacing day object to day number (saturday -> '0')


function getDayNumber(day) {
  return dayNumber = week.indexOf(day);
} // Replacing day number to day object ('0' -> saturday[obj]) (from current_dateTime). Usual system, where sunday is the first day and saturday the last day of the week


function getWeekDay(date) {
  var week = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
  return week[date];
} // Replacing day number to day object ('0' -> saturday[obj]) (from seconds). My own system, where saturday is start of the week, and friday the end


function my_getWeekDay(date) {
  var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];
  return week[date];
} // Changing '1' -> '01'


function zero_first_format(value) {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
} // Getting current time from device


function currentTime() {
  // Current time declaration
  var current_dateTime = new Date();
  var hours = current_dateTime.getHours();
  var minutes = current_dateTime.getMinutes();
  var seconds = current_dateTime.getSeconds(); // Comment for tests

  var day = getWeekDay(current_dateTime.getDay()); // Uncomment for tests
  // return currentTimeTest();  

  return timeToSeconds(hours, minutes, seconds, day);
} // Seconds counter for tests 


{
  var currentTimeTest = function currentTimeTest() {
    s += 20;
    return s % 604800;
  };

  var s = timeToSeconds(0, 0, 0, monday);
}
//# sourceMappingURL=time.dev.js.map
