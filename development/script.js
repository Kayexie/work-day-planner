var currentDayEl = $('#currentDay'); 
var act = $('.col-10')
console.log(act)

//display current time;
setInterval(displayTime, 1000);
function displayTime() {
    var currentDay = moment().format('dddd MMM DD, YYYY, h:mm:ss a');
    currentDayEl.text(currentDay);
  }
currentTime = moment().format('kk');
console.log(currentTime)

var act01 = $('#act01');
var act02 = $('#act02');
var act03 = $('#act03');
var act04 = $('#act04');
var act05 = $('#act05');
var act06 = $('#act06');
var act07 = $('#act07');
var act08 = $('#act08');
var act09 = $('#act09')

console.log(act01)

var activities = [
  act01,
  act02,
  act03,
  act04,
  act05,
  act06,
  act07,
  act08,
  act09,
];

//?why dataset.hour dosen't work?

console.log(activities[0])

for (i=0; i < activities.length; i++) {
  if (currentTime == activities[i].attr('data-hour')) {
    activities[i].addClass('present')
  } else if (currentTime > activities[i].attr('data-hour')) {
    activities[i].addClass('past')
} else if (currentTime < activities[i].attr('data-hour')) 
activities[i].addClass('future')
};


// save activities
var saveBtn = $('.saveBtn')
var activityInput = $('.col-10')
var activityValue = activityInput.val();
console.log(activityValue)

console.log(activityInput)

function saveAct (event){
  var element = event.target;
  if (element.matches(".Btn")){
  var activityValue = activityInput.val();
  console.log(activityValue)
  localStorage.setItem("activityValue", activityValue);
}}

saveBtn.on("click", saveAct);