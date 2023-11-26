// Q :  Find the "Kth" max and min element of an array

function findKthMaxMin(arr, k) {
    if (arr.length === 0 || k <= 0 || k > arr.length) {
      return "Invalid input"; // Return an error message for invalid input
    }
  
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Find Kth minimum and maximum elements
    const kthMin = arr[k - 1];
    const kthMax = arr[arr.length - k];
  
    return { kthMin, kthMax };
  }
  
  // Example array
  const numbers = [3, 9, 1, 6, 4, 7, 2, 8, 5];
  const k = 3; // Find the 3rd minimum and maximum elements
  
  const result = findKthMaxMin(numbers, k);
  console.log(`Kth minimum element (${k}):`, result.kthMin);
  console.log(`Kth maximum element (${k}):`, result.kthMax);
  