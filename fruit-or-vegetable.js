// Write a function to check for fruit or vegetable:
// Receive an item from the greengrocery

// Fruits: banana, apple, kiwi, cherry, lemon, grapes
// Vegetables: cucumber, pepper, carrot, onion
// Print: "vegetable", "fruit" or "unknown"


function fruitOrVegetable(product) {
  switch (product) {
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    // TODO: Implement the other cases
  }
}