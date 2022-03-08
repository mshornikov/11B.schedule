// Classes. Days declaration. Lessons declaration. Week declaration



// class contains hours, minutes, seconds and number of the day, and can give time in seconds
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
        var day = this.get_dayNumber() * 24 * 3600; // 24 hours per day and 3600 seconds per hour
        var hours = this.get_hours() * 3600; // 3600 seconds per hour
        var minutes = this.get_minutes() * 60; // 60 seconds per minute
        var seconds = this.get_seconds();

        return day + hours + minutes + seconds;
    }
}

// class contains name of the day, amount of lessons, and array of lessons
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

// class contains name of the lesson, start time and end time in seconds
class Lesson {
    constructor(name, additional_name, startTime, endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.additional_name = additional_name; // Name for future usage
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

    get_additionalName() {
        return this.additional_name;
    }
}

// Lessons declaration
var mondayLessons = [new Lesson('Математика', 'Математики', new Time(8, 15, 0, 2), new Time(8, 55, 0, 2)), new Lesson('Химия', 'Химии', new Time(9, 5, 0, 2), new Time(9, 45, 0, 2)), new Lesson('Математика', 'Математики', new Time(10, 5, 0, 2), new Time(10, 45, 0, 2)), 
new Lesson('Обществознание', 'Обществознания', new Time(11, 0, 0, 2), new Time(11, 40, 0, 2)), new Lesson('Литература', 'Литературы', new Time(11, 50, 0, 2), new Time(12, 30, 0, 2)), new Lesson('Английский язык', 'Английского языка', new Time(12, 40, 0, 2), new Time(13, 20, 0, 2)),
new Lesson('ОБЖ', 'ОБЖ', new Time(13, 30, 0, 2), new Time(14, 10, 0, 2))];

var tuesdayLessons = [new Lesson('Математика', 'Математики', new Time(8, 15, 0, 3), new Time(8, 55, 0, 3)), new Lesson('Русский язык', 'Русского языка', new Time(9, 5, 0, 3), new Time(9, 45, 0, 3)), new Lesson('Английский язык', 'Английского языка', new Time(10, 5, 0, 3), new Time(10, 45, 0, 3)), 
new Lesson('История', 'Истории', new Time(11, 0, 0, 3), new Time(11, 40, 0, 3)), new Lesson('Литература', 'Литературы', new Time(11, 50, 0, 3), new Time(12, 30, 0, 3)), new Lesson('География', 'Географии', new Time(12, 40, 0, 3), new Time(13, 20, 0, 3)),
new Lesson('Физика', 'Физики', new Time(13, 30, 0, 3), new Time(14, 10, 0, 3))];

var wednesdayLessons = [new Lesson('Литература', 'Литературы', new Time(9, 5, 0, 4), new Time(9, 45, 0, 4)), new Lesson('Физкультура', 'Физкультуры', new Time(10, 5, 0, 4), new Time(10, 45, 0, 4)), 
new Lesson('Астрономия', 'Астрономии', new Time(11, 0, 0, 4), new Time(11, 40, 0, 4)), new Lesson('Экономика', 'Экономики', new Time(11, 50, 0, 4), new Time(12, 30, 0, 4)), new Lesson('Право', 'Права', new Time(12, 40, 0, 4), new Time(13, 20, 0, 4)),
new Lesson('Английский язык', 'Английского языка', new Time(13, 30, 0, 4), new Time(14, 10, 0, 4))];

var thursdayLessons = [new Lesson('Математика', 'Математики', new Time(8, 15, 0, 5), new Time(8, 55, 0, 5)),new Lesson('Информатика', 'Информатики', new Time(9, 5, 0, 5), new Time(9, 45, 0, 5)), new Lesson('Обществознание', 'Общестовзнания', new Time(10, 5, 0, 5), new Time(10, 45, 0, 5)), 
new Lesson('Право', 'Права', new Time(11, 0, 0, 5), new Time(11, 40, 0, 5)), new Lesson('Математика', 'Математики', new Time(11, 50, 0, 5), new Time(12, 30, 0, 5)), new Lesson('Физкультура', 'Физкультуры', new Time(12, 40, 0, 5), new Time(13, 20, 0, 5))];

var fridayLessons = [new Lesson('Физкультура', 'Физкультуры', new Time(8, 15, 0, 6), new Time(8, 55, 0, 6)), new Lesson('Математика', 'Математики', new Time(9, 5, 0, 6), new Time(9, 45, 0, 6)), new Lesson('Физика', 'Физики', new Time(10, 5, 0, 6), new Time(10, 45, 0, 6)), 
new Lesson('Родной язык', 'Родного языка', new Time(11, 0, 0, 6), new Time(11, 40, 0, 6)), new Lesson('Экономика', 'Экономики', new Time(11, 50, 0, 6), new Time(12, 30, 0, 6)), new Lesson('Биология', 'Биологии', new Time(12, 40, 0, 6), new Time(13, 20, 0, 6)),
new Lesson('История', 'Истории', new Time(13, 30, 0, 6), new Time(14, 10, 0, 6))];
// var mondayLessons = [];
// var lessonsArray = [mondayLessons];

// let mondaySchedule = [['Математика', 'Математики'], ['Химия', 'Химии'], ['Математика', 'Математики'], ['Обществознание', 'Обществознания'], ['Литература', 'Литературы'], ['Английский язык', 'Английского языка'], ['ОБЖ', 'ОБЖ']];

// let tuesdaySchedule = [['Математика', 'Математики'], ['Русский язык', 'Русского языка'], ['Английский язык', 'Английского языка'], ['История', 'Истории'], ['Литература', 'Литературы'], ['География', 'Географии'], ['Физика', 'Физики']];

// let wednesdaySchedule = [['Литература', 'Литературы'], ['Физкультура', 'Физкультуры'], ['Астрономия', 'Астрономии'], ['Экономика', 'Экономики'], ['Право', 'Права'], ['Английский язык', 'Английского языка']];

// let thursdaySchedule = [['Математика', 'Математики'], ['Информатика', 'Информатики'], ['Обществознание', 'Обществознания'], ['Право', 'Права'], ['Математика', 'Математики'], ['Физкультура', 'Физкультуры']];

// let fridaySchedule = [['Физкультура', 'Физкультуры'], ['Математика', 'Математики'], ['Физика', 'Физики'], ['Родной язык', 'Родного языка'], ['Экономика', 'Экономики'], ['Биология', 'Биологии'], ['История', 'Истории']];

// var lessonsStartTimes = [[8, 15], [9, 5], [10, 5], [11, 0], [11, 50], [12, 40], [13, 30], [14, 20]];
// var lessonsEndTimes = [[8, 55], [9, 45], [10, 45], [11, 40], [12, 30], [13, 20], [14, 10], [15, 0]];

// var schedulesArray = [mondaySchedule, tuesdaySchedule, wednesdaySchedule, thursdaySchedule, fridaySchedule]
// createSchedule(schedulesArray, lessonsArray, lessonsStartTimes, lessonsEndTimes)
// function createSchedule(schedulesArray, lessonsArray, lessonsStartTimes, lessonsEndTimes) {
//     for (var i = 0; i < lessonsArray.length; i++) {
//         lessonsArray[i] = [new Lesson(schedulesArray[i][i][0], schedulesArray[i][i][1], new Time(lessonsStartTimes[i][0], lessonsStartTimes[i][1], 0, i + 2), new Time(lessonsEndTimes[i][0], lessonsEndTimes[i][1], 0, i + 2))]
//         for (var x = 0; x < schedulesArray.length )
//     } 
// }

// Days declaration
var saturday = new Day('Суббота', 0, []); // number = 0
var sunday = new Day('Воскресенье', 0, []); // number = 1
var monday = new Day('Понедельник', 7, mondayLessons); // number = 2
var tuesday = new Day('Вторник', 7, tuesdayLessons); // number = 3
var wednesday = new Day('Среда', 6, wednesdayLessons); // number = 4
var thursday = new Day('Четверг', 6, thursdayLessons);  // number = 5
var friday = new Day('Пятница', 7, fridayLessons); // // number = 6


// Week declaration
var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];