/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if (sumNum === 0 || sumNum === 1)
    return 1;
  for (var i = sumNum - 1; i >= 1; i--) {
    sumNum *= i;
  }
  return sumNum;
}
// factorial(5);
console.log(factorial(5));