function square(num) {
  return (num *= num);
}
const array = [1, 2, 3, 4, 5];
const newArray = array.map(square);
console.log(newArray);
