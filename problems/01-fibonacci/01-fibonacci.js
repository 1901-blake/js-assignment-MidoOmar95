/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let a = 1;
    let b = 0;
    let temp;

    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
  
    return b;

}

// console.log(fib(5));