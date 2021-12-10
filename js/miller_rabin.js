// xor-shift for random number generation
function get_random (previous, limit) {
  var x = previous;
  var a = BigInt(17);
  var b = BigInt(3);
  var c = BigInt(13);
  x = (x ^ (x << a)) % limit;
  x = (x ^ (x >> b)) % limit;
  x = (x ^ (x << c)) % limit;
  return x;
}

function FastModularExponentiation(x, y, mod) {
  var result = 1n;
  while (y > 0) {
    if (y & 1n) {
      result = (result * x) % mod;
    }
    x = (x * x) % mod;
    y = y >> 1n;
  }
  return result;
}

function MillerRabin() {
  var unconverted_number = document.getElementById("positive-integer").value;
  var output = document.getElementById("output");
  if (isNaN(unconverted_number) || unconverted_number < 0) {
    output.value = "Your input is not a valid positive integer greater than 1!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  output.style.color = "white";
  var number = BigInt(unconverted_number);
  if (number == 2n) {
    output.value = "2 is a prime number.";
    output.hidden = false;
    return;
  }
  if (number % 2n == 0) {
    output.value = "The number is a composite number.";
    output.hidden = false;
    return;
  }
  var q = BigInt(number - 1n);
  var k = 0n;
  while (q % 2n == 0) {
    k = k + 1n;
    q = q >> 1n;
  }
  let TRIALS = 20n;

  // starting state for xor-shift (number was picked at random)
  var prev = 12314141n;
  for (var iter = 0; iter < TRIALS; iter++) {
    var a = get_random(prev, number - 1n);
    prev = a;
    var current = FastModularExponentiation(a, q, number);
    var ok = true;
    if (current == 1n) {
      ok = false;
    }
    for (var j = 0n; j < k; j++) {
      var e = (1n << j) * q;
      current = FastModularExponentiation(a, e, number);
      if (current == number - 1n) {
        ok = false;
        break;
      }
    }
    if (ok == true) {
      output.value = "The number is a composite number.";
      output.hidden = false;
      return;
    }
  }
  output.value = "The number is a prime number with a high probability.";
  output.hidden = false;
}