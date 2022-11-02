// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    console.log(digits)
    for(i = 0; i < digits.length; i++){
      sum += Number(digits[i])
    }
    return sum
  }

  //Damn mine is chonky
  // Here's a better one
  function getSumOfDigits(integer) {
  
    return Array.from(String(integer), Number).reduce((a,b) => a + b)
   }