// Classes
class Time {
    constructor(hours, minutes, seconds, dayNumber) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.dayNumber = dayNumber;
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

    get_dayNumber() {
        return this.dayNumber;
    }

    get_time() {
        return this.get_dayNumber() * 24 * 3600 + this.get_hours() * 3600 + this.get_minutes() * 60 + this.get_seconds();
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

// Lessons declaration
var mondayLessons = [new Lesson('Математика', new Time(8, 15, 0, 2), new Time(8, 55, 0, 2)), new Lesson('Химия', new Time(9, 5, 0, 2), new Time(9, 45, 0, 2)), new Lesson('Математика', new Time(10, 5, 0, 2), new Time(10, 45, 0, 2)), 
new Lesson('Обществознание', new Time(11, 0, 0, 2), new Time(11, 40, 0, 2)), new Lesson('Литература', new Time(11, 50, 0, 2), new Time(12, 30, 0, 2)), new Lesson('Английский язык', new Time(12, 40, 0, 2), new Time(13, 20, 0, 2)),
new Lesson('ОБЖ', new Time(13, 30, 0, 2), new Time(14, 10, 0, 2))];

var tuesdayLessons = [new Lesson('Математика', new Time(8, 15, 0, 3), new Time(8, 55, 0, 3)), new Lesson('Русский язык', new Time(9, 5, 0, 3), new Time(9, 45, 0, 3)), new Lesson('Английский язык', new Time(10, 5, 0, 3), new Time(10, 45, 0, 3)), 
new Lesson('История', new Time(11, 0, 0, 3), new Time(11, 40, 0, 3)), new Lesson('Литература', new Time(11, 50, 0, 3), new Time(12, 30, 0, 3)), new Lesson('География', new Time(12, 40, 0, 3), new Time(13, 20, 0, 3)),
new Lesson('Физика', new Time(13, 30, 0, 3), new Time(14, 10, 0, 3))];

var wednesdayLessons = [new Lesson('Литература', new Time(9, 5, 0, 4), new Time(9, 45, 0, 4)), new Lesson('Физкультура', new Time(10, 5, 0, 4), new Time(10, 45, 0, 4)), 
new Lesson('Астрономия', new Time(11, 0, 0, 4), new Time(11, 40, 0, 4)), new Lesson('Экономика', new Time(11, 50, 0, 4), new Time(12, 30, 0, 4)), new Lesson('Право', new Time(12, 40, 0, 4), new Time(13, 20, 0, 4)),
new Lesson('Английский язык', new Time(13, 30, 0, 4), new Time(14, 10, 0, 4))];

var thursdayLessons = [new Lesson('Математика', new Time(8, 15, 0, 5), new Time(8, 55, 0, 5)),new Lesson('Информатика', new Time(9, 5, 0, 5), new Time(9, 45, 0, 5)), new Lesson('Обществознание', new Time(10, 5, 0, 5), new Time(10, 45, 0, 5)), 
new Lesson('Право', new Time(11, 0, 0, 5), new Time(11, 40, 0, 5)), new Lesson('Математика', new Time(11, 50, 0, 5), new Time(12, 30, 0, 5)), new Lesson('Физкультура', new Time(12, 40, 0, 5), new Time(13, 20, 0, 5))];

var fridayLessons = [new Lesson('Физкультура', new Time(8, 15, 0, 6), new Time(8, 55, 0, 6)), new Lesson('Математика', new Time(9, 5, 0, 6), new Time(9, 45, 0, 6)), new Lesson('Физика', new Time(10, 5, 0, 6), new Time(10, 45, 0, 6)), 
new Lesson('Родной язык', new Time(11, 0, 0, 6), new Time(11, 40, 0, 6)), new Lesson('Экономика', new Time(11, 50, 0, 6), new Time(12, 30, 0, 6)), new Lesson('Биология', new Time(12, 40, 0, 6), new Time(13, 20, 0, 6)),
new Lesson('История', new Time(13, 30, 0, 6), new Time(14, 10, 0, 6))];

// Days declaration
var sunday = new Day('Воскресенье', 0, []);
var monday = new Day('Понедельник', 7, mondayLessons);
var tuesday = new Day('Вторник', 7, tuesdayLessons);
var wednesday = new Day('Среда', 6, wednesdayLessons);
var thursday = new Day('Четверг', 6, thursdayLessons);  
var friday = new Day('Пятница', 7, fridayLessons);
var saturday = new Day('Суббота', 0, []);

// Week declaration
var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];

// Function which changing '1' -> '01'
function zero_first_format(value) {
    if (value < 10) {
        value='0'+value;
    }
    return value;
}

// Function which replacing day number to day object ('0' -> saturday)
function getWeekDay(date) {    
    var week = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

    return week[date.getDay()];
    }

// Function which replacing day object to day number (saturday -> '0')
function getDayNumber(day) {
    return dayNumber = week[week.indexOf(day)];
}

// Function which convert time from 8:01:01 to 28861 for comparing
function timeToSeconds(hours, minutes, seconds, day) {
    var dayNumber = week.indexOf(day);

    // Converting time from 8:01:01 to 28861 for comparing
    let time = dayNumber * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
    return time;
}


// Function which convert time from 28861 to 8:01:01 for output
function secondsToTime(time, length) {
    if (length == 'seconds') {
        return zero_first_format(~~((time % 3600) % 60)).toString();
    }

    if (length == 'minutes') {
        return zero_first_format(~~((time % 3600) / 60)).toString();
    }

    if (length == 'hours') {
        return (~~(((time / 24) % 3600 * 24) / 3600)).toString();
    }

    if (length == 'long') {
        if ((~~(((time / 24) % 3600 * 24) / 3600)) == 0) {
            return ~~((time % 3600) / 60).toString() + ':' + zero_first_format(~~((time % 3600) % 60)).toString();
        }

        return (~~(((time / 24) % 3600 * 24) / 3600)).toString() + ':' + zero_first_format(~~((time % 3600) / 60)).toString() + ':' + zero_first_format(~~((time % 3600) % 60)).toString();
    }

    if (length == 'short') {
        return ~~((time % 3600) / 60).toString() + ':' + zero_first_format(~~((time % 3600) % 60)).toString();
    }
}

// Function whic by current time understands what lesson now
function whatLessonNow() {

    // Current time declaration
    var current_datetime = new Date();
    var hours = current_datetime.getHours();
    var minutes = current_datetime.getMinutes();
    var seconds = current_datetime.getSeconds();
    var day = getWeekDay(current_datetime, week);

    // Converting time from 8:01:01 to 28861 for comparing
    let time = timeToSeconds(hours, minutes, seconds, day);

    // Weekend
    if (day == saturday | day == sunday) {
        return 'Сегодня выходной' + '<br>До уроков: ' + estTime('weekend');
    }

    // Time after lessons ('15:00')
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return 'Уроки уже закончились' + '<br>До уроков: ' + estTime('weekend');
    }

    // Time before lessons ('8:14')
    if (time < day.get_lessons()[0].get_startTime().get_time()) {
        return 'Уроки ещё не начались. <br>Первый урок: ' + day.get_lessons()[0].get_name() + '<br>До урока: ' + estTime('weekend');
    }

    // Loop which
    for (i in day.get_lessons()){
        if (time > day.get_lessons()[i].get_startTime().get_time() & time < day.get_lessons()[i].get_endTime().get_time()) {
            return 'Сейчас: ' + day.get_lessons()[i].get_name() + '<br> Осталось ' + estTime('lesson');
        }
        if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
            var nextLesson = day.get_lessons()[i].get_name();
        }
    }

    // Break
    return 'Перемена. Cледующий урок: ' + nextLesson + '<br>До урока ' + estTime('break');

}

function whatLesson() {
    // Current time declaration
    var current_datetime = new Date();
    var hours = current_datetime.getHours();
    var minutes = current_datetime.getMinutes();
    var seconds = current_datetime.getSeconds();
    var day = getWeekDay(current_datetime, week);

    // Converting time from 8:01:01 to 28861 for comparing
    let time = timeToSeconds(hours, minutes, seconds, day);

    // Weekend
    if (day == saturday) {
        return 'Weekend';
    }

    if (day == sunday) {
        return 'Weekend';
    }

    // Time after lessons ('15:00')
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return 'End';
    }

    // Time before lessons ('8:14')
    if (time <= day.get_lessons()[0].get_startTime().get_time()) {
        return 'Before';
    }

    // Loop which
    for (let i = 0;  i < day.get_lessons().length; i++){
        if (time >= day.get_lessons()[i].get_startTime().get_time() & time <= day.get_lessons()[i].get_endTime().get_time()) {
            return day.get_lessons()[i];
        }
    }
    
    // Break
    return 'Break';
}

// Updating status in header
document.getElementById('current_status').innerHTML = whatLessonNow();
setInterval(function () {
    document.getElementById('current_status').innerHTML = whatLessonNow();
    // document.getElementById('est').innerHTML = estTime('lesson');
}, 1000);

// Document writing
document.write('<div class="container">');
document.write('<div class="week">');
for (i in week) {
    if (i != 0 & i != 1) {
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

// Function which understand which lesson is next
function nextLesson() {
    // Current time declaration
    var current_datetime = new Date();
    var hours = current_datetime.getHours();
    var minutes = current_datetime.getMinutes();
    var seconds = current_datetime.getSeconds();
    var day = getWeekDay(current_datetime, week);

    // Converting time from 8:01:01 to 28861 for comparing
    let time = timeToSeconds(hours, minutes, seconds, day);

    // Weekend
    if (day == saturday) {
        return week[week.indexOf(day) + 2].get_lessons()[0];
    }

    if (day == sunday) {
        return week[week.indexOf(day) + 1].get_lessons()[0];
    }

    // Time after lessons ('15:00')
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return week[week.indexOf(day) + 1].get_lessons()[0];
    }

    // Time before lessons ('8:14')
    if (time <= day.get_lessons()[0].get_startTime().get_time()) {
        return day.get_lessons()[0];
    }

    // Loop which
    for (let i = 0;  i < day.get_lessons().length; i++){
        if (time >= day.get_lessons()[i].get_startTime().get_time() & time <= day.get_lessons()[i].get_endTime().get_time()) {
            return day.get_lessons()[i+1];
        }
        if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
            var nextLesson = day.get_lessons()[i];
        }
    }
    
    // Break
    return nextLesson;
}

// Function which counting estimated time to the next lesson
function estTime(type) {

    // Current time declaration
    var current_datetime = new Date();
    var hours = current_datetime.getHours();
    var minutes = current_datetime.getMinutes();
    var seconds = current_datetime.getSeconds();
    var day = getWeekDay(current_datetime, week);

    // Converting time from 8:01:01 to 28861 for comparing
    var time = timeToSeconds(hours, minutes, seconds, day);

    
    if (type == 'break') {
        let est = nextLesson().get_startTime().get_time();
        return secondsToTime(est - time, 'short');
    }
    if (type == 'lesson') {
        let est = whatLesson().get_endTime().get_time();
        return secondsToTime(est - time, 'short');
    }
    if (type == 'weekend') {
        let est = nextLesson().get_startTime().get_time();
        return secondsToTime(est - time, 'long');
    }
}