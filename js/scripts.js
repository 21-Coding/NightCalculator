// businessLogic
var add = function(number1, number2) {
  return number1 + number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};









// userInterface

$(document).ready(function() {
  $("#subBtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($(add1).val());
    var number2 = parseInt($(add2).val());
    var result = subtract(number1, number2);
    $("#output").text(result);
    console.log(hey);
  });
  $("#addBtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($(add1).val());
    var number2 = parseInt($(add2).val());
    var result = add(number1, number2);
    $("#output").text(result);
      console.log(hey);
  });
  $("#divBtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($(add1).val());
    var number2 = parseInt($(add2).val());
    var result = divide(number1, number2);
    $("#output").text(result);
      console.log(hey);
  });
  $("#multBtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($(add1).val());
    var number2 = parseInt($(add2).val());
    var result = multiply(number1, number2);
    $("#output").text(result);
      console.log(hey);
  });
});
