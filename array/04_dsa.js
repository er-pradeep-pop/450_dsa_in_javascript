// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

// 1 way
function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    
    while (mid <= high) {
      switch (nums[mid]) {
        case 0:
          [nums[low], nums[mid]] = [nums[mid], nums[low]];
          low++;
          mid++;
          break;
        case 1:
          mid++;
          break;
        case 2:
          [nums[mid], nums[high]] = [nums[high], nums[mid]];
          high--;
          break;
      }
    }
    return nums;
  }
  
  // Example array
  const arr = [2, 0, 2, 1, 1, 0];
  console.log("Original Array:", arr);
  
  // Sort the array without using any sorting algorithm
  sortColors(arr);
  console.log("Sorted Array:", arr);

  
//   2 way

function sortColors(nums) {
    // Count the occurrences of 0, 1, and 2
    let count = [0, 0, 0];
    for (let i = 0; i < nums.length; i++) {
      count[nums[i]]++;
    }
  
    // Reconstruct the sorted array based on counts
    let index = 0;
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        nums[index] = i;
        index++;
        count[i]--;
      }
    }
  
    return nums;
  }
  
  // Example array
  const arr2 = [2, 0, 2, 1, 1, 0];
  console.log("Original Array2:", arr);
  
  // Sort the array using counting sort
  sortColors(arr2);
  console.log("Sorted Array2:", arr2);
  