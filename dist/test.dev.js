"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var current_datetime = new Date();

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
  function Day(dayName, dayNumber, lessonAmount, lessons) {
    _classCallCheck(this, Day);

    this.dayName = dayName;
    this.dayNumber = dayNumber;
    this.lessonAmount = lessonAmount;
    this.lessons = lessons;
  }

  _createClass(Day, [{
    key: "get_dayName",
    value: function get_dayName() {
      return this.dayName;
    }
  }, {
    key: "get_dayNumber",
    value: function get_dayNumber() {
      return this.dayNumber;
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
}();

var mondayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Химия', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Математика', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Обществознание', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Английский язык', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('ОБЖ', new Time(13, 30, 0), new Time(14, 10, 0))];
var tuesdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Русский язык', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Английский язык', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('История', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('География', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('Физика', new Time(13, 30, 0), new Time(14, 10, 0))];
var wednesdayLessons = [new Lesson('Литература', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физкультура', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Астрономия', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Право', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('Английский язык', new Time(13, 30, 0), new Time(14, 10, 0))];
var thursdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Информатика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Обществознание', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Право', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Математика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Физкультура', new Time(12, 40, 0), new Time(13, 20, 0))];
var fridayLessons = [new Lesson('Физкультура', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Математика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физика', new Time(10, 5, 0), new Time(10, 45, 0)), new Lesson('Родной язык', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Биология', new Time(12, 40, 0), new Time(13, 20, 0)), new Lesson('История', new Time(13, 30, 0), new Time(14, 10, 0))];
var sunday = new Day('Воскресенье', 0, 0, []);
var monday = new Day('Понедельник', 1, 7, mondayLessons);
var tuesday = new Day('Вторник', 2, 7, tuesdayLessons);
var wednesday = new Day('Среда', 3, 6, wednesdayLessons);
var thursday = new Day('Четверг', 4, 6, thursdayLessons);
var friday = new Day('Пятница', 5, 7, fridayLessons);
var saturday = new Day('Суббота', 6, 0, []);
var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

function getWeekDay(date, days) {
  return days[date.getDay()];
}

function whatLesson(hours, minutes, seconds, day) {
  var time = hours * 3600 + minutes * 60 + seconds;

  if (day == saturday | day == sunday) {
    return 'Сегодня выходной';
  }

  for (i in day.get_lessons()) {
    if (time >= day.get_lessons()[i].get_startTime().get_time() & time <= day.get_lessons()[i].get_endTime().get_time()) {
      return 'Сейчас: ' + day.get_lessons()[i].get_name();
    }

    if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
      var nextLesson = day.get_lessons()[i].get_name();
    }
  }

  if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time()) {
    return 'Уроки уже закончились';
  }

  if (time <= day.get_lessons()[0].get_endTime().get_time()) {
    return 'Уроки ещё не начались. <br> Первый урок: ' + day.get_lessons()[0].get_name();
  }

  return 'Перемена. Cледующий урок: ' + nextLesson;
} // setInterval(function () {
//     document.getElementById('current').innerHTML = whatLesson(current_datetime.getHours(), current_datetime.getMinutes(), current_datetime.getSeconds(), getWeekDay(current_datetime, days));
// }, 100);


setInterval(function () {
  document.getElementById('current').innerHTML = whatLesson(8, 14, 0, thursday);
}, 100);
//# sourceMappingURL=test.dev.js.map
