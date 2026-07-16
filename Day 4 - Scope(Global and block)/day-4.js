console.log("Scope (Global and block)");
console.log("");

// Global scope

console.log("\nGlobal scope -->");

let Name = 'Saksham';
console.log("Outside of block:", Name);

{
    console.log("Inside of block:", Name);
}

// Block scope

console.log("\nBlock scope");

{
    let age = 18;
    const country = 'India';

    console.log("Age:", age);
    console.log("Country:", country);
}

// var is not block scoped variable

console.log("\nvar is not block scoped variable");

{
    var lang = 'javascript';
}

console.log("Language:", lang);