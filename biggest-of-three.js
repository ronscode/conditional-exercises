// Problem: Biggest of three numbers
// Write a function which takes 3 numbers and prints the biggest number of them

function biggestNumberOfThree(n1, n2, n3) {
  if (n1 > n2)
    if (n1 > n3)
      console.log(n1);
    else
      console.log(n3);
  else
    if (n2 > n3)
      console.log(n2);
    else
      console.log(n3);
}

 biggestNumberOfThree(1,42,55);

// biggestNumberOfThree(5, 6, 9);



// Alternate version 

// function bigOfThree(n1, n2, n3) {
//   bigNum = n1;

//   if (n2 > bigNum) {
//     bigNum = n2;
//   }  if (n3 > bigNum) {
//     bigNum = n3
//   }
//   console.log(bigNum);

// }

// bigOfThree(1,2,42);