// index.js

function hasTargetSum(array, target) {
  // Loop through each number in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the current number plus any other number in the array equals the target
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; // Found a pair that adds up to the target
      }
    }
  }
  return false; // No pair found that adds up to the target
}

/* 
  Time complexity: O(n^2)
    - The outer loop iterates through n elements, and the inner loop iterates through n-1, n-2, ..., 1 elements.
    - As the input size increases, the number of operations grows quadratically.

  Pseudocode:
    - For each number in the array:
      - Check if the current number plus any other number in the array equals the target
        - If a pair is found, return true
    - If no pair is found, return false

  Written explanation:
    - The function iterates through each number in the array and checks if there exists another number that, when added to the current number, equals the target.
    - If such a pair is found, the function returns true, indicating that there exists a pair of numbers in the array that adds up to the target.
    - If no such pair is found after checking all possible combinations, the function returns false, indicating that no pair of numbers adds up to the target.

  Custom test cases:
    - You can add your own custom test cases below to further validate the implementation.
*/

// Custom test cases
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

module.exports = hasTargetSum;

