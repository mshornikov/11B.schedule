// Document HTML-code. Which makes from classes


// HTML-comment for block
document.write('<!-- Container  -->');

// Container and week declaration
document.write('<div class="container">');
document.write('<div class="week" id="week">');

// Loop that writes every day in week
for (i in week) {
    let time = currentTime();
    var today = my_getWeekDay(currentDate(time));
    // for everyone but not saturday and sunday
    if (week[i].get_dayName() != 'Суббота' & week[i].get_dayName() != 'Воскресенье') {
        // HTML-comment for block
        document.write('<!-- ', week[i].get_dayName(),  ' -->');

        // Day block
        document.write('<article onclick="scroll_to(', week[i].get_name(), ',)" class="day" id="', week[i].get_name(), '">');
        document.write('<div class="day-header">',  week[i].get_dayName(), '</div>');
        
        for (x in week[i].get_lessons()) {
            // HTML-comment for block
            document.write('<!-- ', week[i].get_lessons()[x].get_name(),  ' -->');

            // Lesson block
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