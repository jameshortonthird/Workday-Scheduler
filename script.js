// Set the current date via moment JS in the header
var today = moment().format('dddd, MMM do YYYY, h:mm:ss a');
$("#currentDay").html(today);
// Wrapped all code that interacts witht he Dom in a call to jQ
$(document).ready(function (){
  $(".saveBtn").on("click", function (){
    
    const textTyped = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    localStorage.setItem(time, textTyped);
  })
  // A function to display time blocks in the correct color based on time of day 
  function pastPresentFuture() {

    const exactTime = moment().hour();
    
    console.log(exactTime)

    $(".time-block").each(function (){
      const hourBlocks = parseInt($(this).attr("id").split("hour-")[1]);

      console.log(hourBlocks)

      if (hourBlocks < exactTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (hourBlocks === exactTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23"));
  $("#hour-24 .description").val(localStorage.getItem("hour-24"));

  pastPresentFuture();

})