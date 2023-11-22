//Ex 1
//Sol 1
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${month}-${day}-${year}`;
console.log(fullDate);

//Sol 2
const todaysDate = date.toJSON();
console.log(todaysDate.slice(0, 10));

//Ex 2
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
    return true;
  } else {
    console.log(year + " is not a leap year");
    return false;
  }
}

checkLeapYear(2024);

//Ex3
function findSundayOnJanuaryFirst() {
  for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`January 1, ${year} is a Sunday.`);
    } else {
      console.log(`January 1, ${year} is not a Sunday.`);
    }
  }
}

findSundayOnJanuaryFirst();

//Ex4

function calculate(num1, num2, operation) {
  if (operation === "multiply") {
    result = num1 * num2;
    console.log(`The result of ${num1} * ${num2} is: ${result}`);
  } else if (operation === "divide") {
    if (num2 === 0) {
      alert("Cannot divide by zero.");
      return;
    }
    result = num1 / num2;
    console.log(`The result of ${num1} / ${num2} is: ${result}`);
  } else {
    alert("Invalid operation. Please choose 'multiply' or 'divide'.");
  }
}

calculate(3, 5, "multiply");
