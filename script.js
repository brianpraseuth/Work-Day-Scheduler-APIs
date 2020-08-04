// Current day is displayed on top of the page
var date = $("#currentDay");
date = date.text(moment().format('MMMM Do YYYY'));


$(document).ready(function(){
// Time blocks change color if hour is past/present/future
    function hourColor() {
        var currentTime = moment().hour();
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id"));
            if (blockHour < currentTime) {
                $(this).addClass("past");
                console.log(this);
            } else if (blockHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourColor();
    var hourChecker = setInterval(hourColor, 1500);

// Clicking the save button saves hour/input from the user in to local storage. 
// Information persists even if page is refreshed.
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, value);
    });

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});

