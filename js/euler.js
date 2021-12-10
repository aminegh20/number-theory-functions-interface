function Totient() {
  var input = document.getElementById("input-positive-integer");
  var output = document.getElementById("output-positive-integer");
  var number = input.value;
  if (isNaN(number) || number < 1) {
    output.value = "Your input is not a valid positive integer!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  number = BigInt(number);
  var result = BigInt(number);
  for (var i = 2n; i * i < number + 1n; i++) {
    if (number % i == 0) {
      while (number % i == 0) {
        number =  number / i;
      }
      result = result -  result / i;
    }
  }
  if (number > 1) {
    result =  result - result / number;
  }
  output.value = result.toString();
  output.style.color = "white";
  output.hidden = false;
}