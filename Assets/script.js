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

  //gives the stored text a unique name based on the element's ID
  var currentID = $(this).parent("section").attr('id');
  localStorage.setItem(currentID, JSON.stringify(event));
});

//prints saved text entries in their respective time slots
function renderEvents() {
   var IdList = ["hour-09", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
   for (var i = 0; i < IdList.length; i++) {
    var storedEvents = JSON.parse(localStorage.getItem(IdList[i]));
    var item = $(`#${IdList[i]}`).children("textarea");
    if (storedEvents !== null) {
      item.text(storedEvents.text);
    }
  }
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

renderEvents();