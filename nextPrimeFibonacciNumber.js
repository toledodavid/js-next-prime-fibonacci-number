// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.




/* 
  Displays an alert box with inputNumber and
  a prime and finonacci number greater than inputNumber.
*/
function showAlert(inputNumber, nextPrimeAndFibonacciNumber) {
  alert(
    `
    InputNumber: ${inputNumber}
    Next prime fibonacci number: ${nextPrimeAndFibonacciNumber}
    `
  );
}


/*
  I changed the function name from ispnum to isAPrimeNumber to make it more readable.
  isAPrimeNumber function return true if num is a prime number, otherwise return false.
*/
function isAPrimeNumber(num) {
  // I changed the initialExpression from var i = 2 to let i = 2 following js documentation.
  // Also I added curly bracket at for loop statement to make it more readable and avoid confusion with the indentation.

  for (let i = 2; i < num; i++) {
    if  (num % i === 0) return false;
  }
  return true;
};


/* 
  I changed the function name from fibonacci to getFibonacciNumber to make it more descriptive,
  and I changed the function block using a ternary operator instead an if statement to make
  the functionality in a single line.

  Returns a fibonacci number according the position in the fibonacci sequence.
  
  (num) values      : 1, 2, 3, 4, 5,  6,  7,  8...
  Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21, 34...
*/
function getFibonacciNumber(num) {
  return (num <= 1) ? 1 : getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
};


/*
  Main function to get next prime and fibonacci number greater than the argument.
  I changed function name to make it more descriptive.
*/
function getNextPrimeAndFibonacciNumberGreaterThan(inputNumber) {

  // I changed variable names according their behavior in the function scope.
  let nextPrimeAndFibonacciNumber = 0;
  let counter = 1;

  while (true) {
    
    // I changed variable name to make it more descriptive.
    let fibonacciNumber = getFibonacciNumber(counter);

    console.log(`inputNumber: ${inputNumber} - fibonacciNumber: ${fibonacciNumber}`);

    /*
      Checks if current fibonacciNumber is greater than inputNumber and if it is a prime number.
      If the condition is true, we found the result and call the break statement that terminates the while loop. 
    */
    if (fibonacciNumber > inputNumber && isAPrimeNumber(fibonacciNumber)) {
      nextPrimeAndFibonacciNumber = fibonacciNumber;
      break;
    } else {
      // Otherwise it continues to find the next fibonacci number.
      counter += 1;
      console.warn('bumping to', fibonacciNumber);
    }
  }

  console.warn('Next prime fibonacci number: ', nextPrimeAndFibonacciNumber);
  showAlert(inputNumber, nextPrimeAndFibonacciNumber);
}

getNextPrimeAndFibonacciNumberGreaterThan(20);
