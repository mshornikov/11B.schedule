"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes
var Time =
/*#__PURE__*/
function () {
  function Time(hours, minutes, seconds) {
    _classCallCheck(this, Time);

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  _createClass(Time, [{
    key: "get_hours",
    value: function get_hours() {
      return this.hours;
    }
  }, {
    key: "get_minutes",
    value: function get_minutes() {
      return this.minutes;
    }
  }, {
    key: "get_seconds",
    value: function get_seconds() {
      return this.seconds;
    }
  }, {
    key: "get_time",
    value: function get_time() {
      return this.get_hours() * 3600 + this.get_minutes() * 60 + this.get_seconds();
    }
  }]);

  return Time;
}();

var Day =
/*#__PURE__*/
function () {
  function Day(dayName, lessonAmount, lessons) {
    _classCallCheck(this, Day);

    this.dayName = dayName;
    this.lessonAmount = lessonAmount;
    this.lessons = lessons;
  }

  _createClass(Day, [{
    key: "get_dayName",
    value: function get_dayName() {
      return this.dayName;
    }
  }, {
    key: "get_lessonAmount",
    value: function get_lessonAmount() {
      return this.lessonAmount;
    }
  }, {
    key: "get_lessons",
    value: function get_lessons() {
      return this.lessons;
    }
  }]);

  return Day;
}();

var Lesson =
/*#__PURE__*/
function () {
  function Lesson(name, startTime, endTime) {
    _classCallCheck(this, Lesson);

    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  _createClass(Lesson, [{
    key: "get_name",
    value: function get_name() {
      return this.name;
    }
  }, {
    key: "get_startTime",
    value: function get_startTime() {
      return this.startTime;
    }
  }, {
    key: "get_endTime",
    value: function get_endTime() {
      return this.endTime;
    }
  }]);

  return Lesson;
}(); // Lessons declaration


var mondayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Химия', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Математика', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Обществознание', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Английский язык', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('ОБЖ', new Time(13, 30, 0), new Time(14, 10, 0))];
var tuesdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Русский язык', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Английский язык', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('История', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('География', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('Физика', new Time(13, 30, 0), new Time(14, 10, 0))];
var wednesdayLessons = [new Lesson('Литература', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физкультура', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Астрономия', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Право', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('Английский язык', new Time(13, 30, 0), new Time(14, 10, 0))];
var thursdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Информатика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Обществознание', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Право', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Математика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Физкультура', new Time(12, 40, 0), new Time(13, 20, 0))];
var fridayLessons = [new Lesson('Физкультура', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Математика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физика', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Родной язык', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Биология', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('История', new Time(13, 30, 0), new Time(14, 10, 0))]; // Days declaration

var sunday = new Day('Воскресенье', 0, []);
var monday = new Day('Понедельник', 7, mondayLessons);
var tuesday = new Day('Вторник', 7, tuesdayLessons);
var wednesday = new Day('Среда', 6, wednesdayLessons);
var thursday = new Day('Четверг', 6, thursdayLessons);
var friday = new Day('Пятница', 7, fridayLessons);
var saturday = new Day('Суббота', 0, []); // Week declaration

var week = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]; // Function which changing '1' -> '01'

function zero_first_format(value) {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
} // Function which replacing day number to day object ('0' -> sunday)


function getWeekDay(date, week) {
  return week[date.getDay()];
} // Function whic by current time understans what lesson now


function whatLessonNow() {
  // Current time declaration
  var current_datetime = new Date();
  var hours = current_datetime.getHours();
  var minutes = current_datetime.getMinutes();
  var seconds = current_datetime.getSeconds();
  var day = getWeekDay(current_datetime, week); // Converting time from 8:01:01 to 28861 for comparing

  var time = hours * 3600 + minutes * 60 + seconds; // Weekend

  if (day == saturday | day == sunday) {
    return 'Сегодня выходной';
  } // Loop which


  for (i in day.get_lessons()) {
    if (time >= day.get_lessons()[i].get_startTime().get_time() & time <= day.get_lessons()[i].get_endTime().get_time()) {
      return 'Сейчас: ' + day.get_lessons()[i].get_name();
    }

    if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
      var nextLesson = day.get_lessons()[i].get_name();
    }
  } // Time after lessons ('15:00')


  if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time()) {
    return 'Уроки уже закончились';
  } // Time before lessons ('8:14')


  if (time <= day.get_lessons()[0].get_endTime().get_time()) {
    return 'Уроки ещё не начались. <br> Первый урок: ' + day.get_lessons()[0].get_name();
  } // Break


  return 'Перемена. Cледующий урок: ' + nextLesson;
} // Updating status in header


setInterval(function () {
  document.getElementById('current_status').innerHTML = whatLessonNow();
}, 100); // Document writing

document.write('<div class="container">');
document.write('<div class="week">');

for (i in week) {
  if (i != 0 & i != 6) {
    document.write('<article class="day">');
    document.write('<section class="day-header">', week[i].get_dayName(), '</section>');

    for (x in week[i].get_lessons()) {
      document.write('<section class="lesson-line">');
      document.write('<section class="lesson-start-time">', week[i].get_lessons()[x].get_startTime().get_hours(), ':', zero_first_format(week[i].get_lessons()[x].get_startTime().get_minutes()), '</section>');
      document.write('<section class="lesson-column">');
      document.write('<section class="lesson-name">', week[i].get_lessons()[x].get_name(), '</section>');
      document.write('<section class="lesson-end-time">', week[i].get_lessons()[x].get_endTime().get_hours(), ':', zero_first_format(week[i].get_lessons()[x].get_endTime().get_minutes()), '</section>');
      document.write('</section>');
      document.write('</section>');
    }

    document.write('</article>');
  }
}

document.write('</div>');
document.write('</div>');
//# sourceMappingURL=test.dev.js.map
