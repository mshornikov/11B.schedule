var current_datetime = new Date();

class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    get_hours() {
        return this.hours;
    }

    get_minutes() {
        return this.minutes;
    }

    get_seconds() {
        return this.seconds;
    }

    get_time() {
        return this.get_hours() * 3600 + this.get_minutes() * 60 + this.get_seconds();
    }

}

class Day {
    constructor(dayName, lessonAmount, lessons) {
        this.dayName = dayName;
        this.lessonAmount = lessonAmount;
        this.lessons = lessons;
    }

    get_dayName() {
        return this.dayName;
    }

    get_lessonAmount() {
        return this.lessonAmount;
    }

    get_lessons() {
        return this.lessons;
    }

}

class Lesson {
    constructor(name, startTime, endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    get_name() {
        return this.name;
    }

    get_startTime() {
        return this.startTime;
    }

    get_endTime() {
        return this.endTime;
    }
}

var mondayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Химия', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Математика', new Time(10, 5, 0), new Time(10, 45, 0)), 
new Lesson('Обществознание', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Английский язык', new Time(12, 40, 0), new Time(13, 20, 0)),
new Lesson('ОБЖ', new Time(13, 30, 0), new Time(14, 10, 0))];

var tuesdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Русский язык', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Английский язык', new Time(10, 5, 0), new Time(10, 45, 0)), 
new Lesson('История', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Литература', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('География', new Time(12, 40, 0), new Time(13, 20, 0)),
new Lesson('Физика', new Time(13, 30, 0), new Time(14, 10, 0))];

var wednesdayLessons = [new Lesson('Литература', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физкультура', new Time(10, 5, 0), new Time(10, 45, 0)), 
new Lesson('Астрономия', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Право', new Time(12, 40, 0), new Time(13, 20, 0)),
new Lesson('Английский язык', new Time(13, 30, 0), new Time(14, 10, 0))];

var thursdayLessons = [new Lesson('Математика', new Time(8, 15, 0), new Time(8, 55, 0)),new Lesson('Информатика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Обществознание', new Time(10, 5, 0), new Time(10, 45, 0)), 
new Lesson('Право', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Математика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Физкультура', new Time(12, 40, 0), new Time(13, 20, 0))];

var fridayLessons = [new Lesson('Физкультура', new Time(8, 15, 0), new Time(8, 55, 0)), new Lesson('Математика', new Time(9, 5, 0), new Time(9, 45, 0)), new Lesson('Физика', new Time(10, 5, 0), new Time(10, 45, 0)), 
new Lesson('Родной язык', new Time(11, 0, 0), new Time(11, 40, 0)), new Lesson('Экономика', new Time(11, 50, 0), new Time(12, 30, 0)), new Lesson('Биология', new Time(12, 40, 0), new Time(13, 20, 0)),
new Lesson('История', new Time(13, 30, 0), new Time(14, 10, 0))];

var sunday = new Day('Воскресенье', 0, [])
var monday = new Day('Понедельник', 7, mondayLessons);
var tuesday = new Day('Вторник', 7, tuesdayLessons);
var wednesday = new Day('Среда', 6, wednesdayLessons);
var thursday = new Day('Четверг', 6, thursdayLessons);
var friday = new Day('Пятница', 7, fridayLessons);
var saturday = new Day('Суббота', 0, [])

var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

function getWeekDay(date, days) {    
    return days[date.getDay()];
    }


function whatLesson(hours, minutes, seconds, day) {

    let time = hours * 3600 + minutes * 60 + seconds;

    if (day == saturday | day == sunday) {
        return 'Сегодня выходной';
    }

    for (i in day.get_lessons()){
        if (time >= day.get_lessons()[i].get_startTime().get_time() & time <= day.get_lessons()[i].get_endTime().get_time()) {
            return 'Сейчас: ' + day.get_lessons()[i].get_name();
        }
        if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
            var nextLesson = day.get_lessons()[i].get_name();
        }
        
    }

    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return 'Уроки уже закончились';
    }

    if (time <= day.get_lessons()[0].get_endTime().get_time()) {
        return 'Уроки ещё не начались. <br> Первый урок: ' + day.get_lessons()[0].get_name();
    }

    return 'Перемена. Cледующий урок: ' + nextLesson;

}

setInterval(function () {
    document.getElementById('current').innerHTML = whatLesson(current_datetime.getHours(), current_datetime.getMinutes(), current_datetime.getSeconds(), getWeekDay(current_datetime, days));
}, 100);

// setInterval(function () {
//     document.getElementById('current').innerHTML = whatLesson(9, 14, 0, thursday);
// }, 100);