"use strict";

// Tracking current lesson and next lesson. And giving it to the page. Counting estimated time ti the next lesson
// Getting current lesson (object)
function whatLessonNow(time) {
  // Getting current time and day (in object)
  var day = my_getWeekDay(currentDate(time)); // Weekend case

  if (day == saturday | day == sunday) {
    return 'weekend';
  } // Loop that running at lessons array and getting current lesson


  for (i in day.get_lessons()) {
    var lesson = day.get_lessons()[i];

    if (time >= lesson.get_startTime().get_time() & time <= lesson.get_endTime().get_time()) {
      return lesson;
    }
  } // Time after lessons ('15:00') case


  if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time()) {
    return 'after';
  } // Time before lessons ('8:14') case


  if (time + 1 <= day.get_lessons()[0].get_startTime().get_time()) {
    return 'before';
  } // Break case


  return 'break';
} // Creating output from current status


function currentStatus(status, time) {
  // lesson
  if (toString.call(status) == '[object Object]') {
    return 'Сейчас: ' + status.get_name() + ' ' + estTime('lesson', time);
  } // break


  if (status == 'break') {
    return 'Перемена. Cледующий урок: ' + nextLesson(time).get_name() + ' До урока ' + estTime('break', time);
  } // time before lessons


  if (status == 'before') {
    return 'Уроки ещё не начались. Первый урок: ' + nextLesson(time).get_name() + ' До урока: ' + estTime('before', time);
  } // time after lessons


  if (status == 'after') {
    return 'Уроки уже закончились' + ' До уроков: ' + estTime('after', time);
  } // weekend


  if (status == 'weekend') {
    return 'Сегодня выходной' + ' До уроков: ' + estTime('before', time);
  }
} // Function which understand which lesson is the next


function nextLesson(time) {
  var day = my_getWeekDay(currentDate(time));
  var dayNumber = getDayNumber(day); // Weekend

  if (day == saturday) {
    return week[dayNumber + 2].get_lessons()[0];
  }

  if (day == sunday) {
    return week[dayNumber + 1].get_lessons()[0];
  } // Time after lessons ('15:00') at the end of the day


  if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time()) {
    // exclusion for friday (next lesson is the first lesson at monday)
    if (day == friday) {
      return week[2].get_lessons()[0];
    }

    return week[dayNumber + 1].get_lessons()[0];
  } // Time before lessons ('8:14') at the start of the day


  if (time <= day.get_lessons()[0].get_startTime().get_time()) {
    return day.get_lessons()[0];
  } // Loop that running at lessons array and getting next lesson


  for (var _i = 0; _i < day.get_lessons().length; _i++) {
    var lesson = day.get_lessons()[_i];

    var maxBreakLength = 1200; // in seconds

    if (time >= lesson.get_startTime().get_time() & time <= lesson.get_endTime().get_time()) {
      // exclusion for last lesson at friday
      if (day == friday & lesson == day.get_lessons(day.get_lessonAmount() - 1)) {
        return weel[0].get_lessons()[0];
      }

      return day.get_lessons()[_i + 1];
    }

    if (time + maxBreakLength >= lesson.get_startTime().get_time()) {
      var next_lesson = lesson;
    }
  } // Break


  return next_lesson;
} // Counting estimated time to the next lesson


function estTime(type, time) {
  var day = my_getWeekDay(currentDate(time)); // getting current day for friday check
  // estimated time to break end

  if (type == 'break') {
    var est = nextLesson(time).get_startTime().get_time();
    return secondsToTime(est - time, 'short');
  } // estimated time to lesson end


  if (type == 'lesson') {
    var _est = whatLessonNow(time).get_endTime().get_time();

    return secondsToTime(_est - time, 'short');
  } // estimated time to the start of first lesson today


  if (type == 'before') {
    var _est2 = nextLesson(time).get_startTime().get_time();

    return secondsToTime(_est2 - time, 'long');
  } // estimated time to the start of first lesson tomorrow


  if (type == 'after') {
    var _est3 = nextLesson(time).get_startTime().get_time();

    if (day == friday) {
      return secondsToTime(_est3 + timeToSeconds(24, 0, 0, friday) - time, 'long');
    }

    return secondsToTime(_est3 - time, 'long');
  }
} // Updating status in header
// For fast download of web page


var time = currentTime();
document.getElementById('current_status').innerHTML = currentStatus(whatLessonNow(time), time); // timer for every second update

setInterval(function () {
  // Getting current time
  var time = currentTime();
  document.getElementById('current_status').innerHTML = currentStatus(whatLessonNow(time), time);
}, 1000);
//# sourceMappingURL=timer.dev.js.map
