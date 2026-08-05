function reverseString (str) {
    if (str === "") return "";
    let nextStep = str.slice(1);
    let reversedPart = reverseString(nextStep);
    let firstChar = str.charAt(0);
    let answer = (reversedPart + firstChar);
    return answer;
}

console.log(reverseString(prompt("Enter the word")));