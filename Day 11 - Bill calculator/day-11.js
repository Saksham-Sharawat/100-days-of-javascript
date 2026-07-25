// Rest Parameter Function
function addItems(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

// Default Parameter Function
function calculateBill(total, tax = 18) {
    let taxAmount = (total * tax) / 100;
    let finalPrice = total + taxAmount;

    console.log("Total Amount: $" + total);
    console.log("Tax: " + tax + "%");
    console.log("Tax Amount: $" + taxAmount);
    console.log("Final Bill: $" + finalPrice);
}

// Add any number of item prices
let total = addItems(200, 500, 300, 100);

// Calculate bill (uses default tax = 18%)
calculateBill(total);

console.log("----------------");

// Custom tax
calculateBill(total, 5);