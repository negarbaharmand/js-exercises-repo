const person = {
  name: "Negar Bah",
  age: 32,
  address: {
    street: "Stallvägen",
    city: "Växjö",
    country: "Sweden",
    zipCode: "23455",
  },
};

//Ex 14
function returnProperty(object, property) {
  return object[property];
}

console.log(returnProperty(person, "age"));

//Ex 15
function addProperty(object, propertyName, propertyValue) {
  object[propertyName] = propertyValue;
}

function deleteProperty(object, propertyName) {
  if (object.hasOwnProperty(propertyName)) {
    delete object[propertyName];
    console.log(`Property '${propertyName}' deleted.`);
  } else {
    console.log(`Property '${propertyName}' does not exist in the object.`);
  }
}

addProperty(person, "sex", "female");
console.log("Object after adding 'sex':", person);

deleteProperty(person.address, "city");
console.log("Object after deleting 'city':", person);
