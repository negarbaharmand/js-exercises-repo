function filterEvens(array) {
  const filteredArray = array.filter((number) => number % 2 == 0);
  return filteredArray;
}

const array = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterEvens(array));
