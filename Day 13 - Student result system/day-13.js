// Student result system

console.log("===== Student result system =====");

function passStudent (name) {
    console.log(name, "passed.");
}

function failStudent (name) {
    console.log(name, "failed.");
}

function distinctionStudent (name) {
    console.log(name, "passed with distinction.")
}

function processResult (name, marks, callback) {
    callback(name);
}

let studentName = prompt("Enter student's name");
let studentMarks = Number(prompt("Enter the marks of the student"));
let callback;

if (studentMarks>=90 && studentMarks<=100) {
    callback = distinctionStudent;
} else if (studentMarks>=40 && studentMarks<90) {
    callback = passStudent;
} else if (studentMarks>=0 && studentMarks<40) {
    callback = failStudent;
} else {
    console.log("❌Wrong marks");
}

processResult(studentName, studentMarks, callback);