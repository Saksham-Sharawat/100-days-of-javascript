// Search number

console.log("===== Search number =====");

// matrix

let numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

// get the input of number

let target = Number(prompt("Enter a number(1-9)"));
let match = false;

// search logic

search:
for (let a=0; a<numbers.length; a++) {

    for (let b=0; b<numbers[a].length; b++) {
        
        console.log("Checked:", numbers[a][b]);

        if (numbers[a][b] === target) {
            
            console.log("\n✅ Number found!");
            console.log("Row:", a+1);
            console.log("Column:", b+1);

            match = true;
            break search;
        }
    }
}

if (!match) {
    console.log("\n❌ Number not found!");
}