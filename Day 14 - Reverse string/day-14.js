// Reverse string

console.log("===== Reverse string =====");

// logic function

function reverseString (str) {
    if (str === "") return "";
    let nextStep = str.slice(1);
    let reversedPart = reverseString(nextStep);
    let firstChar = str.charAt(0);
    let answer = (reversedPart + firstChar);
    return answer;
}

// print the results

let input = prompt("Enter the word");

console.log("\nOriginal string :", input);
console.log("Reversed string :", reverseString(input));

console.log("\nThank you for using the program!😊");
console.log("To use it again just reload the page!");