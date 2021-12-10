function FastModularExponentiation() {
  var base = document.getElementById("base").value;
  var exponent = document.getElementById("exponent").value;
  var mod = document.getElementById("mod").value;
  var output = document.getElementById("output");
  if (isNaN(base) || base < 0) {
    output.value = "Your base is not a valid nonnegative integer!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  if (isNaN(exponent) || exponent < 0) {
    output.value = "Exponent is not a valid nonnegative integer!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  if (isNaN(mod) || mod < 1) {
    output.value = "Modulo is not a valid positive integer!";
    output.style.color = "red";
    output.hidden = false;
    return;
  } 
  var result = 1n;
  exponent = BigInt(exponent);
  mod = BigInt(mod);
  base = BigInt(base);
  while (exponent > 0n) {
    if (exponent & 1n) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exponent = exponent >> 1n;
  }
  output.value = result;
  output.style.color = "white";
  output.hidden = false;
}