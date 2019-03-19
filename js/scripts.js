// business logic
// var pingOrPong = function(number) {
//   for (var i = 1; i <= number; i ++) {
//     if (i % 15 === 0) {
//       $(".list").append("<li>" + "pingpong" + "</li>");
//     } else if (i % 5 === 0) {
//       $(".list").append("<li>" + "pong" + "</li>");
//     } else if (i % 3 === 0) {
//       $(".list").append("<li>" + "ping" + "</li>");
//     } else {
//       $(".list").append("<li>" + (i) + "</li>");
//     }
//   }
// };
var add = function(initial, deposit) {
  return initial + deposit;
}
var subtract = function(initial, withdrawal) {
  return initial - withdrawal;
}


// user interface logic
$(document).ready(function() {
  event.preventDefault();
  var initial = parseInt($("input#initialInput").val());
  var deposit = parseInt($("input#depositInput").val());
  var withdrawal = parseInt($("input#withdrawalInput").val());
  // $("form#ping-pong").submit(function(event) {
  //   event.preventDefault();
  //   $(".list").empty();
  //   var number = parseInt($("input#number").val());
  //   var outputList = pingOrPong(number)
  //     $("#yourNumbers").show();
  // $("form#ping-pong").get(0).reset();
  });
});
