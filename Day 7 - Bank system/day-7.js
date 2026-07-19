// Bank system

console.log("====== Bank System ======")

//Customer info

let username = prompt("Enter you username");
console.log("\nUsername :", username);

let pin = prompt("Enter your pin");
console.log("PIN :", pin);

// Login

console.log("Login successful✅");

// Account balance

let balance = Number(prompt("Enter you bank balance"));


// Select option

console.log("\nSelect option");
console.log("1. Check balance");
console.log("2. Deposit");
console.log("3. Withdraw");

let option = prompt("Select option -> 1. Check balance, 2. Deposit, 3. Withdraw");

console.log("\nSelected option :", option);

if (option == 1) {
    console.log("\nAccount balance :", balance);
} else if (option == 2) {
    let amount_deposit = Number(prompt("Enter the amount"));
    let newbalance_deposit = Number(balance + amount_deposit);
    console.log("Deposit amount :", amount_deposit);
    console.log("New balance :", newbalance_deposit);
} else if (option == 3) {
    let amount_withdraw = Number(prompt("Enter the amount"));
    let newbalance_withdraw = Number(balance - amount_withdraw);
    console.log("Withdraw amount :", amount_withdraw);
    console.log("New balance :", newbalance_withdraw);
} else {console.log("Invaild option selected");}

// Thank you

console.log("\nThank you", username, "for visiting our bank");