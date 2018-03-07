// business logic
var numbers = []

function game(numberInput, numbers) {
  for (var i = 1; i <= numberInput; i++)
    if (i % 15 == 0) {
      numbers.push("pingpong");

    }
  else if (i % 3 == 0) {
    numbers.push("ping");
  } else if (i % 5 == 0) {
    numbers.push("pong");
  } else {
    numbers.push(i);
  }
}

//user logic
$(document).ready(function() {
  $("#user").click(function() {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

    game(numberInput, numbers);

    numbers.forEach(function(number) {
      $("#resultslist").append("<li>" + number + "</li>");
    });

  });
})
