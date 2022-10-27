// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let avg = 0
    array.forEach(i => {avg += i})
    return array.length > 0 ? avg / array.length : 0
  }