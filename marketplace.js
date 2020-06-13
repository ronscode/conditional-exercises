// A market offers different prices for certain products based on the day of the week:
// Calculate the price for certain product and day

// PRODUCT WEEKDAY WEEKEND
// Banana   2.50      2.70
// Apple    1.30      1.60
// Kiwi     2.20      3.00



function marketplace(product, dayOfWeek) {
  if (product == "Banana")
    if (dayOfWeek == "Weekday")
      console.log("2.50");
    else
      console.log("2.70");
  else if (product == "Apple")
    if (dayOfWeek == "Weekday")
      console.log("1.30");
    else
      console.log("1.60");
  // TODO: the same logic for "kiwi"
  
}

marketplace("Banana", "Weekday");