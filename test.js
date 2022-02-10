var num2 = 32;
var num1 = 12;
var rem = num2 % num1;
while (rem > 0) {
  num2 = num1;
  num1 = rem;
  rem = num2 % num1;
}
console.log(num1);
