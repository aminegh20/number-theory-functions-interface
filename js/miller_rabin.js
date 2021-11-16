function FastModularExponentiation(x, y, mod) {
  var result = 1;
  while (y > 0) {
    if (y & 1) {
      result = (result * x) % mod;
    }
    x = (x * x) % mod;
    y = y >> 1;
  }
  return result;
}

function MillerRabin() {
  var number = document.getElementById("positive-integer").value;
  var output = document.getElementById("output");
  if (isNaN(number) || number < 2) {
    output.value = "Your input is not a valid positive integer greater than 1!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  output.style.color = "white";
  if (number == 2) {
    output.value = "2 is a prime number.";
    output.hidden = false;
    return;
  }
  if (number % 2 == 0) {
    output.value = number.toString() + " is a composite number.";
    output.hidden = false;
    return;
  }
  var q = number - 1;
  var k = 0;
  while (q % 2 == 0) {
    k = k + 1;
    q = q >> 1;
  }
  let TRIALS = 20;
  for (var iter = 0; iter < TRIALS; iter++) {
    var a =  parseInt(Math.random() * (number - 3) + 2);
    console.log(a);
    var current = FastModularExponentiation(a, q, number);
    var ok = true;
    if (current == 1) {
      ok = false;
    }
    for (var j = 0; j < k; j++) {
      var e = (1 << j) * q;
      current = FastModularExponentiation(a, e, number);
      if (current == number - 1) {
        ok = false;
        break;
      }
    }
    if (ok == true) {
      output.value = number.toString() + " is a composite number.";
      output.hidden = false;
      return;
    }
  }
  output.value = number.toString() + " is a prime with a high probability.";
  output.hidden = false;
}