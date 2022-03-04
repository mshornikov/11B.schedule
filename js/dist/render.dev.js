"use strict";

// Document HTML-code. Which makes from classes
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
//# sourceMappingURL=render.dev.js.map
