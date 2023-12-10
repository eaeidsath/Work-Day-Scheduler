//Sets text for date display
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss a'))

//updates the day and time
function updateDay() {
  currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss a'));
};
var inst = setInterval(updateDay, 1000);

//stores the entered text in local storage on button click
var button = $(".btn");
button.on('click', function () {
  var event = {
    text: $(this).parent().children("textarea").val(),
    time: $(this).parent("section").attr('id')
  };

  //gives the stored item a unique name based on the element's ID
  var currentID = $(this).parent("section").attr('id');
  localStorage.setItem(currentID, JSON.stringify(event));
});

//simplified function isn't working at the moment
function renderEvents() {
/*   var IdList = ["hour-09", "hour-10", "hour-11"]; */
/*   for (var i = 10; 9 < i < 18; i++) {
    var storedEvents = JSON.parse(localStorage.getItem("hour-" + i));
    var i = $("#hour-" + i).children("textarea");
    i.text(storedEvents.text);
    return;
  } */
  /* var storedEventHour9 = JSON.parse(localStorage.getItem("hour-09"));
  console.log(storedEventHour9.text); */

  /* var storedEvents = JSON.parse(localStorage.getItem(currentID));
  console.log(storedEvents); */
  /* if (storedEvents !== null) {
    $(".container-fluid").children(storedEvents.time).text(storedEvents.text);
  } */
  
}

//long form of rendering saved data onto each hour's text area
function longMethod() {
  var storedEventHour9 = JSON.parse(localStorage.getItem("hour-09"));
  var hour9 = $("#hour-09").children("textarea");
  hour9.text(storedEventHour9.text);

  var storedEventHour10 = JSON.parse(localStorage.getItem("hour-10"));
  var hour10 = $("#hour-10").children("textarea");
  hour10.text(storedEventHour10.text);

  var storedEventHour11 = JSON.parse(localStorage.getItem("hour-11"));
  var hour11 = $("#hour-11").children("textarea");
  hour11.text(storedEventHour11.text);

  var storedEventHour12 = JSON.parse(localStorage.getItem("hour-12"));
  var hour12 = $("#hour-12").children("textarea");
  hour12.text(storedEventHour12.text);

  var storedEventHour13 = JSON.parse(localStorage.getItem("hour-13"));
  var hour13 = $("#hour-13").children("textarea");
  hour13.text(storedEventHour13.text);

  var storedEventHour14 = JSON.parse(localStorage.getItem("hour-14"));
  var hour14 = $("#hour-14").children("textarea");
  hour14.text(storedEventHour14.text);

  var storedEventHour15 = JSON.parse(localStorage.getItem("hour-15"));
  var hour15 = $("#hour-15").children("textarea");
  hour15.text(storedEventHour15.text);

  var storedEventHour16 = JSON.parse(localStorage.getItem("hour-16"));
  var hour16 = $("#hour-16").children("textarea");
  hour16.text(storedEventHour16.text);

  var storedEventHour17 = JSON.parse(localStorage.getItem("hour-17"));
  var hour17 = $("#hour-17").children("textarea");
  hour17.text(storedEventHour17.text);
}

//functions for changing the styling to past, present, and future
function setPast(id) {
  $(id).addClass('past');
};

function setPresent(id) {
  $(id).addClass('present');
};

function setFuture(id) {
  $(id).addClass('future');
};

//gets current hour
var currentHour = dayjs().format('HH');

//compares current hour to element value to decide how to set styling
function changeColor(id) {
  if ($(id).attr('value') < currentHour) {
    setPast(id);
  } else if ($(id).attr('value') == currentHour) {
    setPresent(id);
  } else if ($(id).attr('value') > currentHour) {
    setFuture(id);
  }
}

changeColor("#hour-09");
changeColor("#hour-10");
changeColor("#hour-11");
changeColor("#hour-12");
changeColor("#hour-13");
changeColor("#hour-14");
changeColor("#hour-15");
changeColor("#hour-16");
changeColor("#hour-17");

/* renderEvents(); */
longMethod();