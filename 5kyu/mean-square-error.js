// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

var solution = function(firstArray, secondArray) {
    let sq = 0
    let newArr = []
    let avg = 0
    
    for (i = 0; i < firstArray.length; i++) {
      let sq = Math.abs((secondArray[i] - firstArray[i]) ** 2)
      avg += sq
    }
    
    return avg / firstArray.length
  }

  // Very clunky, a better solution is...
  function solution(a, b) {
    return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
  }
  // I don't even fully understand it!