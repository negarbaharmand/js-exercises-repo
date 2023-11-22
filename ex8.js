function calculateSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);

console.log(`The sum of the array elements is: ${result}`);
