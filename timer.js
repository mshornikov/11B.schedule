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

    // Loop which
    for (i in day.get_lessons()){
        if (time >= day.get_lessons()[i].get_startTime().get_time() & time < day.get_lessons()[i].get_endTime().get_time()) {
            return 'Сейчас: ' + day.get_lessons()[i].get_name() + '<br> Осталось ' + estTime('lesson');
        }
        if (time + 1200 >= day.get_lessons()[i].get_startTime().get_time()) {
            var nextLesson = day.get_lessons()[i].get_name();
        }
    }


    // Time after lessons ('15:00')
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return 'Уроки уже закончились' + '<br>До уроков: ' + estTime('weekend');
    }

    // Time before lessons ('8:14')
    if (time + 1 <= day.get_lessons()[0].get_startTime().get_time()) {
        return 'Уроки ещё не начались. <br>Первый урок: ' + day.get_lessons()[0].get_name() + '<br>До урока: ' + estTime('weekend');
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

    // Loop which
    for (let i = 0;  i < day.get_lessons().length; i++){
        if (time >= day.get_lessons()[i].get_startTime().get_time() & time < day.get_lessons()[i].get_endTime().get_time()) {
            return day.get_lessons()[i];
        }
    }
    
    // Break
    return;
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
    // var time = timeToSeconds(hours, minutes, seconds, day);
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