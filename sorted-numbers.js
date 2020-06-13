// Write a function, which checks for sorted 3 numbers:
// Receives 3 real numbers
// Prints "Ascending" if the numbers are in ascending order
// Prints "Descending" if the numbers are in descending order
// Prints "Not sorted" in any other case

function sortedNumbers(n1, n2, n3) {
  if (n1 < n2 && n2 < n3)
    console.log("Ascending");
  else if (n1 > n2 && n2 > n3)
    console.log("Descending");
  else
    console.log("Not sorted");
}

sortedNumbers(1,2,3)