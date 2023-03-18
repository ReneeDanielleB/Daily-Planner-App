//Display today's date and time 
var todaysDate = moment().format("dddd, MMM Do YYYY"); 
$("#currentDay").html(todaysDate);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(text, time);
    });

    function timeTracker () {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

})

//Function for saving text input to local storage
const saveBtn = document.querySelectorAll(".save");

saveBtn.forEach((saveBtn) => {
    saveBtn.addEventListener("OnClick", () => {
        alert("saved!");
    })
})

//Retrieve items from local storage
$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr1 .description").val(localStorage.getItem("hr1"));
$("#hr2 .description").val(localStorage.getItem("hr2"));
$("#hr3 .description").val(localStorage.getItem("hr3"));
$("#hr4 .description").val(localStorage.getItem("hr4"));
$("#hr5 .description").val(localStorage.getItem("hr5"));

timeTracker();