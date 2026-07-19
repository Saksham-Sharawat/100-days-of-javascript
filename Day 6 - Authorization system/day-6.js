// Authorization system 

// user data

let username = "Saksham";
let password = "123456789";

// Login check

let loginStatus = username === "Saksham" && password === "123456789" ? "Login successful✅" : "Incorrect username or password❌";

console.log("Username :", username);
console.log("Password :", password);
console.log(loginStatus);

// Wellcome message

let wellcome = username ?? "User";
console.log("Wellcome,", wellcome);