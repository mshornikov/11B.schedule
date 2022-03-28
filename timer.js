// Tracking current lesson and next lesson. And giving it to the page. Counting estimated time ti the next lesson



// Getting current lesson (object)
function whatLessonNow(time) {

    // Getting current time and day (in object)
    var day = my_getWeekDay(currentDate(time));

    // Weekend case
    if (day == saturday | day == sunday) {
        return 'weekend';
    }

    // Loop that running at lessons array and getting current lesson
    for (i in day.get_lessons()){

        let lesson = day.get_lessons()[i];

        if (time >= lesson.get_startTime().get_time() & time <= lesson.get_endTime().get_time()) {
            return lesson;
        }
    }

    // Time after lessons ('15:00') case
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {
        return 'after';
    }

    // Time before lessons ('8:14') case
    if (time + 1 <= day.get_lessons()[0].get_startTime().get_time()) {
        return 'before';
    }

    // Break case
    return 'break';
}

// Creating output from current status
function currentStatus(status, time) {

    // lesson
    if (toString.call(status) == '[object Object]') {
        document.getElementById('current_subtitle').innerHTML = 'Сейчас';
        document.getElementById('current_status').innerHTML = status.get_name();
        document.getElementById('current_time_name').innerHTML = 'Осталось';
        document.getElementById('current_time').innerHTML = estTime('lesson', time);
        // document.getElementById('week').style.margin = '110px 0 0 0';
    }

    // break
    if (status == 'break') {
        document.getElementById('current_subtitle').innerHTML = 'Сейчас';
        document.getElementById('current_status').innerHTML = 'Перемена';
        document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
        document.getElementById('current_time').innerHTML = estTime('break', time);
        // document.getElementById('week').style.margin = '110px 0 0 0';
    }

    // time before lessons
    if (status == 'before') {
        document.getElementById('current_subtitle').innerHTML = 'Сейчас';
        document.getElementById('current_status').innerHTML = 'Уроки ещё не начались';
        document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
        document.getElementById('current_time').innerHTML = estTime('before', time);
        // document.getElementById('week').style.margin = '140px 0 0 0';
    }

    // time after lessons
    if (status == 'after') {
        document.getElementById('current_subtitle').innerHTML = 'Сейчас';
        document.getElementById('current_status').innerHTML = 'Уроки уже закончились';
        document.getElementById('current_time_name').innerHTML = 'До ' + nextLesson(time).get_additionalName();
        document.getElementById('current_time').innerHTML = estTime('after', time);
        // document.getElementById('week').style.margin = '140px 0 0 0';
    }

    // weekend
    if (status == 'weekend') {
        document.getElementById('current_subtitle').innerHTML = 'Сегодня';
        document.getElementById('current_status').innerHTML = 'Выходной';
        document.getElementById('current_time_name').innerHTML = 'До уроков:';
        document.getElementById('current_time').innerHTML = estTime('before', time).toString();
        // document.getElementById('week').style.margin = '110px 0 0 0';
    }
}

// Function which understand which lesson is the next
function nextLesson(time) {

    var day = my_getWeekDay(currentDate(time));

    let dayNumber = getDayNumber(day);

    // Weekend
    if (day == saturday) {
        return week[dayNumber + 2].get_lessons()[0];
    }

    if (day == sunday) {
        return week[dayNumber + 1].get_lessons()[0];
    }

    // Time after lessons ('15:00') at the end of the day
    if (time >= day.get_lessons()[day.get_lessons().length - 1].get_endTime().get_time() ) {

        // exclusion for friday (next lesson is the first lesson at monday)
        if (day == friday) {
            return week[2].get_lessons()[0];
        }
        return week[dayNumber + 1].get_lessons()[0];
    }

    // Time before lessons ('8:14') at the start of the day
    if (time <= day.get_lessons()[0].get_startTime().get_time()) {
        return day.get_lessons()[0];
    }

    // Loop that running at lessons array and getting next lesson
    for (let i = 0;  i < day.get_lessons().length; i++){
        
        var lesson = day.get_lessons()[i];
        var maxBreakLength = 1200; // in seconds

        if (time >= lesson.get_startTime().get_time() & time <= lesson.get_endTime().get_time()) {

            // exclusion for last lesson at friday
            if (day == friday & lesson == day.get_lessons(day.get_lessonAmount() - 1)) {
                return weel[0].get_lessons()[0];
            }
            return day.get_lessons()[i+1];
        }
        if (time + maxBreakLength >= lesson.get_startTime().get_time()) {
            var next_lesson = lesson;
        }
    }
    
    // Break
    return next_lesson;
}

// Counting estimated time to the next lesson
function estTime(type, time) {

    var day = my_getWeekDay(currentDate(time)); // getting current day for friday check

    // estimated time to break end
    if (type == 'break') {
        let est = nextLesson(time).get_startTime().get_time();
        return secondsToTime(est - time, 'short');
    }

    // estimated time to lesson end
    if (type == 'lesson') {
        let est = whatLessonNow(time).get_endTime().get_time();
        return secondsToTime(est - time, 'short');
    }

    // estimated time to the start of first lesson today
    if (type == 'before') {
        let est = nextLesson(time).get_startTime().get_time();
        return secondsToTime(est - time, 'long');
    }

    // estimated time to the start of first lesson tomorrow
    if (type == 'after') {
        let est = nextLesson(time).get_startTime().get_time();
        if (day == friday) {
            return secondsToTime(est + timeToSeconds(24, 0, 0, friday) - time, 'long');
        }
        return secondsToTime(est - time, 'long');
    }
}   


// Updating status in header

// For fast download of web page
let time = currentTime();
let day = my_getWeekDay(currentDate(time));
currentStatus(whatLessonNow(time), time);

// timer for every second update
setInterval(function () {

    // Getting current time
    let time = currentTime();

    currentStatus(whatLessonNow(time), time);

}, 1000);


// Finding position of the object
function findPos(obj) {
    var curleft = curtop = 0;

    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return [curleft, curtop];
    }
}

// Scrolling to the current day
window.scrollTo({
    left: 0,
    top: findPos(document.getElementById('friday'))[1] - 140,
    behavior: 'smooth'
});