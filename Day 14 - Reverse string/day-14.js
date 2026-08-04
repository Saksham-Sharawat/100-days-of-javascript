function reverseString (str) {
    if (str === "") return "";
    let nextStep = str.slice(1);
    reverseString(nextStep);
    
}