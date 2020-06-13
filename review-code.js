// Equal value comparison

console.log('5' == 5);  // true

// Equal type (and value) comparison 

console.log('5' === 5) // false

// Less than or equal to

console.log(5 <= 3);    // false

// Not equal comparison

console.log(5 != "cat") // true


// Nested Conditional Statements
var aPerson = {
  name: "Zaphod",
  rating: 5,
  admin: false
}

var secondPerson = {
  name: "Zaphod",
  rating: 5,
  admin: true
}

function nestedConditional(somePerson) {
if (somePerson.name == "Zaphod") {
  if (somePerson.admin === false)
    console.log("Nested conditions met, Zaphod is not an admin")
  else
    console.log("The nested conditions were not met")
} 
}

nestedConditional(aPerson);



