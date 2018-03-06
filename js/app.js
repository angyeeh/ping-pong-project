$(document).ready(function() {
  $("#enter form").submit(function(event) {
    event.preventDefault();
    var display = parseInt($("input#ppnumber").val());
    var result = answer(display);
    $(".Push").text(result);
  });
});
// business logic
var answer = function(display) {
  for (i = 1; i <= display; i++) {
    // if the number is divisible by 15, write "Ping Pong"
    if (i % 15 === 0) {
      console.log("pingpong");
      $(".Push").append("<li>" + "pingpong" + "</li>");
      //return "PingPong";
    }
    // if the number is divisible by 3, write "Ping"
    else if (i % 3 === 0) {
      $(".Push").append("<li>" + "ping" + "</>");
      //return "Ping";
    }
    // otherwise, write "po"
    else if (i % 5 === 0) {
      $(".Push").append("<li>" + "pong" + "</>");
      //return "Pong";
    } else {
      console.log("qwert");
      $(".Push").append("<li>" + i + "</>");
      //return(i);
    }
  }
}
