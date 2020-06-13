// Calculate the sign of the product of 3 numbers:
// Function should receive 3 floating-point numbers
// Print the sign of the product of the entered 3 numbers: positive, negative or zero
// Try to do this without multiplying the 3 numbers

function productSign(n1, n2, n3) {
  if (n1 === 0 || n2 === 0 || n3 === 0)
    console.log("zero");
  else {
    let negativeNumbersCount = 0;
    if (n1 < 0) negativeNumbersCount++;
    if (n2 < 0) negativeNumbersCount++;
    if (n3 < 0) negativeNumbersCount++;
    if (negativeNumbersCount % 2 === 0)
      console.log("positive");
    else
      console.log("negative");
  }
}

productSign(1, 5, -30);