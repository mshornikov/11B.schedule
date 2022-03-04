"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes. Days declaration. Lessons declaration. Week declaration
// class contains hours, minutes, seconds and number of the day, and can give time in seconds
var Time =
/*#__PURE__*/
function () {
  function Time(hours, minutes, seconds, dayNumber) {
    _classCallCheck(this, Time);

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.dayNumber = dayNumber;
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
    key: "get_dayNumber",
    value: function get_dayNumber() {
      return this.dayNumber;
    }
  }, {
    key: "get_time",
    value: function get_time() {
      var day = this.get_dayNumber() * 24 * 3600; // 24 hours per day and 3600 seconds per hour

      var hours = this.get_hours() * 3600; // 3600 seconds per hour

      var minutes = this.get_minutes() * 60; // 60 seconds per minute

      var seconds = this.get_seconds();
      return day + hours + minutes + seconds;
    }
  }]);

  return Time;
}(); // class contains name of the day, amount of lessons, and array of lessons


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
}(); // class contains name of the lesson, start time and end time in seconds


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


var mondayLessons = [new Lesson('Математика', new Time(8, 15, 0, 2), new Time(8, 55, 0, 2)), new Lesson('Химия', new Time(9, 5, 0, 2), new Time(9, 45, 0, 2)), new Lesson('Математика', new Time(10, 5, 0, 2), new Time(10, 45, 0, 2)), new Lesson('Обществознание', new Time(11, 0, 0, 2), new Time(11, 40, 0, 2)), new Lesson('Литература', new Time(11, 50, 0, 2), new Time(12, 30, 0, 2)), new Lesson('Английский язык', new Time(12, 40, 0, 2), new Time(13, 20, 0, 2)), new Lesson('ОБЖ', new Time(13, 30, 0, 2), new Time(14, 10, 0, 2))];
var tuesdayLessons = [new Lesson('Математика', new Time(8, 15, 0, 3), new Time(8, 55, 0, 3)), new Lesson('Русский язык', new Time(9, 5, 0, 3), new Time(9, 45, 0, 3)), new Lesson('Английский язык', new Time(10, 5, 0, 3), new Time(10, 45, 0, 3)), new Lesson('История', new Time(11, 0, 0, 3), new Time(11, 40, 0, 3)), new Lesson('Литература', new Time(11, 50, 0, 3), new Time(12, 30, 0, 3)), new Lesson('География', new Time(12, 40, 0, 3), new Time(13, 20, 0, 3)), new Lesson('Физика', new Time(13, 30, 0, 3), new Time(14, 10, 0, 3))];
var wednesdayLessons = [new Lesson('Литература', new Time(9, 5, 0, 4), new Time(9, 45, 0, 4)), new Lesson('Физкультура', new Time(10, 5, 0, 4), new Time(10, 45, 0, 4)), new Lesson('Астрономия', new Time(11, 0, 0, 4), new Time(11, 40, 0, 4)), new Lesson('Экономика', new Time(11, 50, 0, 4), new Time(12, 30, 0, 4)), new Lesson('Право', new Time(12, 40, 0, 4), new Time(13, 20, 0, 4)), new Lesson('Английский язык', new Time(13, 30, 0, 4), new Time(14, 10, 0, 4))];
var thursdayLessons = [new Lesson('Математика', new Time(8, 15, 0, 5), new Time(8, 55, 0, 5)), new Lesson('Информатика', new Time(9, 5, 0, 5), new Time(9, 45, 0, 5)), new Lesson('Обществознание', new Time(10, 5, 0, 5), new Time(10, 45, 0, 5)), new Lesson('Право', new Time(11, 0, 0, 5), new Time(11, 40, 0, 5)), new Lesson('Математика', new Time(11, 50, 0, 5), new Time(12, 30, 0, 5)), new Lesson('Физкультура', new Time(12, 40, 0, 5), new Time(13, 20, 0, 5))];
var fridayLessons = [new Lesson('Физкультура', new Time(8, 15, 0, 6), new Time(8, 55, 0, 6)), new Lesson('Математика', new Time(9, 5, 0, 6), new Time(9, 45, 0, 6)), new Lesson('Физика', new Time(10, 5, 0, 6), new Time(10, 45, 0, 6)), new Lesson('Родной язык', new Time(11, 0, 0, 6), new Time(11, 40, 0, 6)), new Lesson('Экономика', new Time(11, 50, 0, 6), new Time(12, 30, 0, 6)), new Lesson('Биология', new Time(12, 40, 0, 6), new Time(13, 20, 0, 6)), new Lesson('История', new Time(13, 30, 0, 6), new Time(14, 10, 0, 6))]; // Days declaration

var saturday = new Day('Суббота', 0, []); // number = 0

var sunday = new Day('Воскресенье', 0, []); // number = 1

var monday = new Day('Понедельник', 7, mondayLessons); // number = 2

var tuesday = new Day('Вторник', 7, tuesdayLessons); // number = 3

var wednesday = new Day('Среда', 6, wednesdayLessons); // number = 4

var thursday = new Day('Четверг', 6, thursdayLessons); // number = 5

var friday = new Day('Пятница', 7, fridayLessons); // // number = 6
// Week declaration

var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];
//# sourceMappingURL=classes.dev.js.map
