// Define a function named findMaxMin that takes an array 'arr' as an argument
function findMaxMin(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return "Array is empty"; // If the array is empty, return a message
    }
  
    // Initialize variables to store the minimum and maximum values, assuming the first element is both min and max
    let min = arr[0];
    let max = arr[0];
  
    // Iterate through the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
      // Check if the current element is less than the current 'min' value
      if (arr[i] < min) {
        min = arr[i]; // Update 'min' if the current element is smaller
      } else if (arr[i] > max) {
        max = arr[i]; // Update 'max' if the current element is larger
      }
    }
  
    // Return an object containing the minimum and maximum values found
    return { min, max };
  }
  
  // Example array
  const numbers = [3, 9, 1, 6, 4, 7, 2, 8, 5];
  
  // Call the findMaxMin function with the 'numbers' array
  const result = findMaxMin(numbers);
  
  // Output the minimum and maximum elements to the console
  console.log('Minimum element:', result.min);
  console.log('Maximum element:', result.max);
  