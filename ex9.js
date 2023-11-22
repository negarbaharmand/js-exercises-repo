function findLargestNumber(array) {
  let largest = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > largest) {
      largest = array[index];
    }
  }
  return largest;
}

const numbers = [34, 5, 7, 23, 1222];
console.log("The largest number of array is: " + findLargestNumber(numbers));
