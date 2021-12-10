function ChineseRemainderTheorem() {
  var A = document.getElementById("positive-A");
  var M = document.getElementById("positive-M");
  var number_a = A.value;
  var number_m = M.value;
  var label_m = document.getElementById("label_m");
  var label_a = document.getElementById("label_a");
  var output_m = document.getElementById("output-m");
  var output_a = document.getElementById("output-a");
  if (isNaN(number_a) || isNaN(number_m)) {
    output_m.value = "Your input is not a valid positive integer!";
    output_m.style.color = "red";
    output_m.hidden = false;
    label_m.hidden = true;
    label_a.hidden = true;
    output_a.hidden = true;
    return;
  } 
  var factors = [];
  number_m = BigInt(number_m);
  number_a = BigInt(number_a);
  for (var d = 2n; d * d < number_m + 1n; d++) {
    if (number_m % d == 0n) {
      var factor = 1n;
      while(number_m % d == 0n) {
        factor *= d;
        number_m = number_m / d;
      }
      factors.push(factor);
    }
  }
  if (number_m > 1n) {
    factors.push(number_m);
  }
  var as = "A <=> (";
  var ms = "M <=> (";
  var n = factors.length;
  for (var i = 0; i < n; i++) {
    ms += factors[i].toString();
    ms += ", ";
    as += (number_a % factors[i]).toString();
    as += ", ";
  }
  ms = ms.substring(0, ms.length - 2);
  as = as.substring(0, as.length - 2);
  ms += ')';
  as += ')';
  label_m.hidden = false;
  label_a.hidden = false;
  output_m.value = ms;
  output_a.value = as;
  output_m.style.color = "white";
  output_a.style.color = "white";
  output_m.hidden = false;
  output_a.hidden = false;
}