var currentDayEl = $('#currentDay'); 

//display current day
setInterval(displayTime, 1000);
function displayTime() {
    var currentDay = moment().format('dddd MMM DD, YYYY, h:mm:ss a');
    currentDayEl.text(currentDay);
  }
  