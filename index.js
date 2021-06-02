// Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(num) {
  //Write code here
  let result = [1];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}

// Example 1
// Input: 12
// Output: [1, 2, 3, 4, 6, 12]

// Example 2
// Output: 4
// Input: [1, 2, 4]
