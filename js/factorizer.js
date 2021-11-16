function Factorize() {
  var input = document.getElementById("input-positive-integer");
  var output = document.getElementById("output-positive-integer");
  var number = input.value;
  if (isNaN(number) || number < 1) {
    output.value = "Your input is not a valid positive integer!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  var factorization = "";
  for (var d = 2; d * d < number + 1; d++) {
    if (number % d == 0) {
      var multiplicity = 0;
      while(number % d == 0) {
        multiplicity += 1;
        number = number / d;
      }
      factorization += d.toString() + "^" + multiplicity.toString() + " x ";
    }
  }
  if (number > 1) {
    factorization += number.toString() + "^1" + " x ";
  }
  factorization = factorization.substring(0, factorization.length - 2);
  output.value = factorization;
  output.style.color = "white";
  output.hidden = false;
}