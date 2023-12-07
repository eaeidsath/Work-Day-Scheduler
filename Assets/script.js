// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = $("#currentDay");
currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss'))

function updateDay() {
  currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss'));
};

var inst = setInterval(updateDay, 1000);
var button = $(".btn");
/* var event = {
  text: $(this).parent("textarea").value,
  time: $(this).parent().parent("section").attr('id')
}; */

button.on('click', function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var event = {
    text: $(this).parent("textarea").value,
    time: $(this).parent().parent("section").attr('id')
  };
  localStorage.setItem("event", JSON.stringify(event));
});

function renderEvents() {
  var storedEvents = JSON.parse(localStorage.getItem("event"));
  if (storedEvents !== null) {
    $(".container-fluid").children(storedEvents.time).text(storedEvents.text);
  }
}

function setPast(id) {
  $(id).addClass('past');
};

function setPresent(id) {
  $(id).addClass('present');
};

function setFuture(id) {
  $(id).addClass('future');
};

var currentHour = dayjs().format('HH');

/* $('.container-fluid').find('section').attr('value') */

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
renderEvents();
console.log(currentHour);