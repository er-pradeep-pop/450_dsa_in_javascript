// Reverse the array 

// Example array
const arr = [1, 2, 3, 4, 5];

// Reversing the array using the reverse() method
const reversedArray = arr.reverse();

console.log("Original Array:", arr); // Output: Original Array: [5, 4, 3, 2, 1]
console.log("Reversed Array:", reversedArray); // Output: Reversed Array: [5, 4, 3, 2, 1]


const arr2 = [1, 2, 3, 4, 5,9];
const reversedArray2 = arr2.slice().reverse(); // Create a copy using slice() before reversing

console.log(arr2)
console.log(reversedArray2) // Output: [9, 5, 4, 3, 2,]