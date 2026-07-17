console.log("This is reference data type");


// student info

let student = [
    {
        Name: "Saksham",
        Course: "Btech",
        Marks: 100,
    },

    {
        Name: "Avni",
        Cousre: "Btech",
        Marks: 50,
    }
];

// show student

function showstudent() {
    console.log("\nStudent info");

    console.log(student[0]);
    console.log(student[1]);
}

// total marks

function total () {
    console.log("\nTotal marks =", student[0].Marks + student[1].Marks);
}

// average marks

function average () {
    console.log("\nAverage marks =", (student[0].Marks + student[1].Marks)/2)
}

// function call

showstudent();
total();
average();