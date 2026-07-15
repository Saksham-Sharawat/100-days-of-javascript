// Types of operators

console.log("TYPES OF OPERATOR")

// Arithmetic operators

console.log("\nArithmetic operators")

let a = 5;
let b = 2;

console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Multiplication:", a*b);
console.log("Division:", a/b);
console.log("Modulus:", a%b);
console.log("exponentiation:", a**b);

// Unary operators

console.log("\nUnary operators");

// increment

let num = 10;

console.log("Increment");
console.log("num:", num);
console.log("num++:", num++);
console.log("after num++:", num);
console.log("++num:", ++num);

// decrement

num = 10;

console.log("Decrement");
console.log("num:", num);
console.log("num--:", num--);
console.log("after num--:", num);
console.log("--num:", --num);

// Assignment operator

console.log("\nAssignment operator");

let c = 15;
console.log("c:", c);

c += 5;
console.log("c += 5:", c);

c -= 5;
console.log("c -= 5:", c);

c *= 2;
console.log("c *= 2:", c);

c /= 3;
console.log("c /= 3:", c);

c %= 4;
console.log("c %= 4:", c);

c **= 5;
console.log("c **= 5", c);

// Comparison operators

console.log("\nComparison operators");
console.log("10 == 10:", 10 == 10);
console.log("10 === 10:", 10 === 10);
console.log("10 != 10:", 10 != 10);
console.log("10 !== 10:", 10 !== 10);
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 5:", 10 >= 5);
console.log("10 <= 10:", 10 <= 10)

//Logical operators

console.log("\nLogical operators");

let d = 5;
let e = 3;

console.log("d:",d,", e:",e);
console.log("d > e && d = 5:", d > e && e == 3);
console.log("d > e || d = e:", d > e || d == e);
console.log("!(d < e):", !(d < e));