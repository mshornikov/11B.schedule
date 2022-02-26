"use strict";

function getWeekDay(date) {
  var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}
/* функция добавления ведущих нулей */

/* (если число меньше десяти, перед числом добавляем ноль) */


function zero_first_format(value) {
  if (value < 10) {
    value = '0' + value;
  }

  return value;
}
/* функция получения текущей даты и времени */


function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());
  var seconds = zero_first_format(current_datetime.getSeconds());
  var weekDay = getWeekDay(current_datetime);
  return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds + ";" + weekDay;
}
/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */


document.getElementById('current_date_time_block').innerHTML = date_time();
/* каждую секунду получаем текущую дату и время */

/* и вставляем значение в блок с id "current_date_time_block2" */

setInterval(function () {
  document.getElementById('current_date_time_block2').innerHTML = date_time();
}, 1000);
//# sourceMappingURL=index.dev.js.map
