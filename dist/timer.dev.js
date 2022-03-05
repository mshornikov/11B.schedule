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
    document.getElementById('current_subtitle').innerHTML = 'Сейчас';
    document.getElementById('current_status').innerHTML = status.get_name();
    document.getElementById('current_time_name').innerHTML = 'Осталось';
    document.getElementById('current_time').innerHTML = estTime('lesson', time);
    document.getElementById('week').style.margin = '110px 0 0 0';
  } // break


  if (status == 'break') {
    document.getElementById('current_subtitle').innerHTML = 'Сейчас';
    document.getElementById('current_status').innerHTML = 'Перемена';
    document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
    document.getElementById('current_time').innerHTML = estTime('break', time);
    document.getElementById('week').style.margin = '110px 0 0 0';
  } // time before lessons


  if (status == 'before') {
    document.getElementById('current_subtitle').innerHTML = 'Сейчас';
    document.getElementById('current_status').innerHTML = 'Уроки ещё не начались';
    document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
    document.getElementById('current_time').innerHTML = estTime('before', time);
    document.getElementById('week').style.margin = '140px 0 0 0';
  } // time after lessons


  if (status == 'after') {
    document.getElementById('current_subtitle').innerHTML = 'Сейчас';
    document.getElementById('current_status').innerHTML = 'Уроки уже закончились';
    document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
    document.getElementById('current_time').innerHTML = estTime('after', time);
    document.getElementById('week').style.margin = '140px 0 0 0';
  } // weekend


  if (status == 'weekend') {
    document.getElementById('current_subtitle').innerHTML = 'Сегодня';
    document.getElementById('current_status').innerHTML = 'Выходной';
    document.getElementById('current_time_name').innerHTML = 'До уроков:';
    document.getElementById('current_time').innerHTML = estTime('before', time).toString();
    document.getElementById('week').style.margin = '110px 0 0 0';
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
currentStatus(whatLessonNow(time), time); // timer for every second update

setInterval(function () {
  // Getting current time
  var time = currentTime();
  currentStatus(whatLessonNow(time), time);
}, 1000);
//# sourceMappingURL=timer.dev.js.map
