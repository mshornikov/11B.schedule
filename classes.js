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
    constructor(dayName, name, lessonAmount, lessons) {
        this.dayName = dayName;
        this.lessonAmount = lessonAmount;
        this.lessons = lessons;
        this.name = name;
    }

    get_name() {
        return this.name;
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

// Array for future objects
var lessonsArray = [[], [], [], [], []];

// Time of lessons [h, m]
var lessonsStartTimes = [[8, 15], [9, 5], [10, 5], [11, 0], [11, 50], [12, 40], [13, 30], [14, 20]];
var lessonsEndTimes = [[8, 55], [9, 45], [10, 45], [11, 40], [12, 30], [13, 20], [14, 10], [15, 0]];


// Schedule per day
let mondaySchedule = [['Математика', 'Математики'], ['Химия', 'Химии'], ['Математика', 'Математики'], ['Обществознание', 'Обществознания'], ['Литература', 'Литературы'], ['Английский язык', 'Английского языка'], ['ОБЖ', 'ОБЖ']];

let tuesdaySchedule = [['Математика', 'Математики'], ['Русский язык', 'Русского языка'], ['Английский язык', 'Английского языка'], ['История', 'Истории'], ['Литература', 'Литературы'], ['География', 'Географии'], ['Физика', 'Физики']];

let wednesdaySchedule = [[], ['Литература', 'Литературы'], ['Физкультура', 'Физкультуры'], ['Астрономия', 'Астрономии'], ['Экономика', 'Экономики'], ['Право', 'Права'], ['Английский язык', 'Английского языка']];

let thursdaySchedule = [['Математика', 'Математики'], ['Информатика', 'Информатики'], ['Обществознание', 'Обществознания'], ['Право', 'Права'], ['Математика', 'Математики'], ['Физкультура', 'Физкультуры']];

let fridaySchedule = [['Физкультура', 'Физкультуры'], ['Математика', 'Математики'], ['Физика', 'Физики'], ['Родной язык', 'Родного языка'], ['Экономика', 'Экономики'], ['Биология', 'Биологии'], ['История', 'Истории']];

// Array of schedules
var schedulesArray = [mondaySchedule, tuesdaySchedule, wednesdaySchedule, thursdaySchedule, fridaySchedule];

// Loop that running on items if lessonsArray (days) and creating objects of lessons from arrays 
for (var i = 0; i < lessonsArray.length; i++) {
    for (var l = 0; l < schedulesArray[i].length; l++) {
        if (schedulesArray[i][l][0] != undefined) {
            lessonsArray[i].push(new Lesson(schedulesArray[i][l][0], schedulesArray[i][l][1], new Time(lessonsStartTimes[l][0], lessonsStartTimes[l][1], 0, i + 2), new Time(lessonsEndTimes[l][0], lessonsEndTimes[l][1], 0, i + 2)));
        }
    }
}

// Days declaration
var saturday = new Day('Суббота', 'saturday',  0, []); // number = 0
var sunday = new Day('Воскресенье', 'sunday', 0, []); // number = 1
var monday = new Day('Понедельник', 'monday', 7, lessonsArray[0]); // number = 2
var tuesday = new Day('Вторник', 'tuesday', 7, lessonsArray[1]); // number = 3
var wednesday = new Day('Среда', 'wednesday', 6, lessonsArray[2]); // number = 4
var thursday = new Day('Четверг', 'thursday', 6, lessonsArray[3]);  // number = 5
var friday = new Day('Пятница', 'friday', 7, lessonsArray[4]); // // number = 6


// Week declaration
var week = [saturday, sunday, monday, tuesday, wednesday, thursday, friday];