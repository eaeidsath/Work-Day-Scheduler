// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss'))

function updateDay() {
  currentDay.text(dayjs().format('[It is currently] dddd, MMMM D YYYY, h:mm:ss a'));
};

var inst = setInterval(updateDay, 1000);
var button = $(".btn");

button.on('click', function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var event = {
    text: $(this).parent().children("textarea").val(),
    time: $(this).parent("section").attr('id')
  };

  var currentID = $(this).parent("section").attr('id');
  localStorage.setItem(currentID, JSON.stringify(event));
});


function renderEvents() {
  var IdList = ["hour-09", "hour-10", "hour-11"];
  for (var i = 0; i < IdList.length; i++) {
    var storedEvents = JSON.parse(localStorage.getItem(IdList));
    console.log(storedEvents);
  }
  /* var storedEvents = JSON.parse(localStorage.getItem(currentID));
  console.log(storedEvents); */
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