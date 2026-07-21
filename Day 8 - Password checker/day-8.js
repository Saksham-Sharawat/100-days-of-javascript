// ==========================
// Password Checker
// ==========================

console.log("===== PASSWORD CHECKER =====");

let correctPassword = prompt("Set password");
console.log("Password =", correctPassword);
let password;

while (password !== correctPassword) {

    password = prompt("Enter Password");

    if (password === correctPassword) {
        console.log("✅ Login Successful");
    } else {
        console.log("❌ Wrong Password");
        console.log("Try Again...\n");
    }

}

console.log("Welcome to the system!");