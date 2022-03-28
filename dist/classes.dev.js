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
  function Lesson(name, additional_name, startTime, endTime) {
    _classCallCheck(this, Lesson);

    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.additional_name = additional_name; // Name for future usage
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
  }, {
    key: "get_additionalName",
    value: function get_additionalName() {
      return this.additional_name;
    }
  }]);

  return Lesson;
}(); // Lessons declaration
// Array for future objects


var lessonsArray = [[], [], [], [], []]; // Time of lessons [h, m]

var lessonsStartTimes = [[8, 15], [9, 5], [10, 5], [11, 0], [11, 50], [12, 40], [13, 30], [14, 20]];
var lessonsEndTimes = [[8, 55], [9, 45], [10, 45], [11, 40], [12, 30], [13, 20], [14, 10], [15, 0]]; // Schedule per day

var mondaySchedule = [['Математика', 'Математики'], ['Химия', 'Химии'], ['Математика', 'Математики'], ['Обществознание', 'Обществознания'], ['Литература', 'Литературы'], ['Английский язык', 'Английского языка'], ['ОБЖ', 'ОБЖ']];
var tuesdaySchedule = [['Математика', 'Математики'], ['Русский язык', 'Русского языка'], ['Английский язык', 'Английского языка'], ['История', 'Истории'], ['Литература', 'Литературы'], ['География', 'Географии'], ['Физика', 'Физики']];
var wednesdaySchedule = [[], ['Литература', 'Литературы'], ['Физкультура', 'Физкультуры'], ['Астрономия', 'Астрономии'], ['Экономика', 'Экономики'], ['Право', 'Права'], ['Английский язык', 'Английского языка']];
var thursdaySchedule = [['Математика', 'Математики'], ['Информатика', 'Информатики'], ['Обществознание', 'Обществознания'], ['Право', 'Права'], ['Математика', 'Математики'], ['Физкультура', 'Физкультуры']];
var fridaySchedule = [['Физкультура', 'Физкультуры'], ['Математика', 'Математики'], ['Физика', 'Физики'], ['Родной язык', 'Родного языка'], ['Экономика', 'Экономики'], ['Биология', 'Биологии'], ['История', 'Истории']]; // Array of schedules

var schedulesArray = [mondaySchedule, tuesdaySchedule, wednesdaySchedule, thursdaySchedule, fridaySchedule]; // Loop that running on items if lessonsArray (days) and creating objects of lessons from arrays 

for (var i = 0; i < lessonsArray.length; i++) {
  for (var l = 0; l < schedulesArray[i].length; l++) {
    if (schedulesArray[i][l][0] != undefined) {
      lessonsArray[i].push(new Lesson(schedulesArray[i][l][0], schedulesArray[i][l][1], new Time(lessonsStartTimes[l][0], lessonsStartTimes[l][1], 0, i + 2), new Time(lessonsEndTimes[l][0], lessonsEndTimes[l][1], 0, i + 2)));
    }
  }
} // Days declaration


var saturday = new Day('Суббота', 0, []); // number = 0

var sunday = new Day('Воскресенье', 0, []); // number = 1

var monday = new Day('Понедельник', 7, lessonsArray[0]); // number = 2

var tuesday = new Day('Вторник', 7, lessonsArray[1]); // number = 3

var wednesday = new Day('Среда', 6, lessonsArray[2]); // number = 4

var thursday = new Day('Четверг', 6, lessonsArray[3]); // number = 5

var friday = new Day('Пятница', 7, lessonsArray[4]); // // number = 6
// Week declaration

var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];
//# sourceMappingURL=classes.dev.js.map
