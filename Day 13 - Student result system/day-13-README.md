# 📚 Day 13 - Student Result System

## 📝 Overview

On Day 13, I built a **Student Result System** using JavaScript. This project focuses on the concept of **callback functions** — passing a function as an argument to another function — to determine and display a student's result based on their marks.

---

## 🧠 Concepts Learned

### ✅ Callback Functions
A **callback function** is a function passed as an argument to another function, which then invokes it at the right time. This is a core pattern in JavaScript.

```js
function processResult(name, marks, callback) {
    callback(name); // Invoking the passed-in function
}
```

### ✅ First-Class Functions
JavaScript treats functions as **first-class citizens** — they can be:
- Stored in variables
- Passed as arguments
- Returned from other functions

```js
let callback;

if (studentMarks >= 90) {
    callback = distinctionStudent; // Function stored in a variable
}

processResult(studentName, studentMarks, callback); // Passed as argument
```

### ✅ Conditional Logic with Mark Ranges

| Marks Range | Result                  |
|-------------|-------------------------|
| 90 – 100    | Passed with Distinction |
| 40 – 89     | Passed                  |
| 0 – 39      | Failed                  |
| Other       | ❌ Invalid marks         |

---

## 📁 Files

| File              | Description                          |
|-------------------|--------------------------------------|
| `day-13.html`     | HTML structure / entry point         |
| `day-13.css`      | Styling for the page                 |
| `day-13.js`       | Core JavaScript logic                |

---

## 💡 How It Works

1. The user is prompted to enter a **student's name** and their **marks** (0–100).
2. Based on the marks, a corresponding **callback function** is assigned:
   - `distinctionStudent` → marks ≥ 90
   - `passStudent` → marks between 40 and 89
   - `failStudent` → marks between 0 and 39
3. `processResult()` is called with the student's name and the assigned callback.
4. A motivational message is displayed based on the result.

---

## 🖥️ Sample Console Output

```
===== Student result system =====

Here is the result

Student name : Alice
Student marks : 95
Alice passed with distinction.

✅Well done
```

---

## 🚀 How to Run

1. Open `day-13.html` in any modern web browser.
2. When prompted, enter the **student's name** and **marks**.
3. Open **DevTools → Console** (press `F12`) to view the result output.

---