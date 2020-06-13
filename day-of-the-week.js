// Write a function to print the day of week as words:
// Receives integer n: the day of the week in range [1..7]
// Prints the name of the day (as words, in English)
// Prints "Error" if the number is not in the given range

function dayOfWeek(day) {
  switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    // TODO: Implement the other valid days
    default: console.log("Error"); break;
  }
}

dayOfWeek(2);
