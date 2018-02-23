$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var interger = parseInt($("input#value").val());
    var result = pingpong(value);
    $("#result").text(result);
  })
})

// business logic
var pingpong = function(value) {
  for (var i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
      return "Ping";
    } else if (i % 5 === 0) {
      return "Pong";
    } else if (i % 15 === 0) {
      return "PingPong";
    }
  }
};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#value").val());
    var result = pingpong(value);

    $("#result").show();
  })
})
