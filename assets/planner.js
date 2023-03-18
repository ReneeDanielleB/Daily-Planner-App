let currentDay = $("#currentDay");
let scheduler = $("#.container");

function timeDisplay() {
    let today = moment().format("dddd, MMMM Do HH:mm A");
    currentDay.text(today);
}
timeDisplay();

//display hours using for loop
let hours = { start: 9, finish: 17 };

for (let i = hours.start; i <= hours.finish; i++) {
   let scheduleArea = $("<div>"). 
}

//local storage

//fetch api