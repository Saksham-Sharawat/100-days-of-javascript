// Number guessing game

console.log("===== Number guessing game =====");

let secretNumber = 7;
let guessNumber;

do {
    guessNumber = Number(prompt("Enter a number between 1 to 10"));

    if (guessNumber<1 || guessNumber>10) {
        console.log("Please enter a number in between 1 to 10");
    }

    if (guessNumber === secretNumber) {
        console.log("Congratulation, ✅You guess the correct number");
    } else if (guessNumber < secretNumber) {
        console.log("Too low");
    } else {
        console.log("Too high");
    }

} while (guessNumber !== secretNumber);

console.log("You won the game🎉");