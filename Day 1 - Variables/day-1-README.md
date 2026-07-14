# 📅 Day 1 — Variables

> **100 Days of JavaScript Challenge**
> 🗓️ Topic: Introduction to JavaScript Variables

---

## 🎯 Learning Objective

On Day 1, the focus was on getting comfortable with the very first building block of any JavaScript program — **variables**. Specifically, declaring variables using the modern `let` keyword, assigning values to them, and performing basic arithmetic operations.

---

## 📚 Concepts Covered

### 1. `let` — Variable Declaration

`let` is the modern way to declare variables in JavaScript (introduced in ES6/ES2015). Unlike the older `var`, `let` is **block-scoped**, meaning it only exists within the block `{}` it was defined in.

```js
let a = 10;
let b = 5;
```

| Keyword | Scope         | Re-declarable | Re-assignable |
|---------|---------------|---------------|---------------|
| `var`   | Function/Global | ✅ Yes       | ✅ Yes        |
| `let`   | Block          | ❌ No        | ✅ Yes        |
| `const` | Block          | ❌ No        | ❌ No         |

> **Note:** Day 1 intentionally uses only `let` to keep things simple. `const` and `var` will be explored as the challenge progresses.

---

### 2. `console.log()` — Printing to the Console

`console.log()` is used to output values to the browser's developer console. It can accept multiple arguments, which are printed space-separated.

```js
console.log("a =", a, "b =", b);
// Output: a = 10 b = 5

console.log("a+b =", a + b);
// Output: a+b = 15
```

---

### 3. Arithmetic Operations

JavaScript supports standard arithmetic operators:

| Operator | Description    | Example   | Result |
|----------|----------------|-----------|--------|
| `+`      | Addition       | `10 + 5`  | `15`   |
| `-`      | Subtraction    | `10 - 5`  | `5`    |
| `*`      | Multiplication | `10 * 5`  | `50`   |
| `/`      | Division       | `10 / 5`  | `2`    |
| `%`      | Modulus        | `10 % 3`  | `1`    |
| `**`     | Exponentiation | `10 ** 2` | `100`  |

Day 1 specifically practices **addition** (`+`).

---

## 📁 File Structure

```
Day 1 - Variables/
├── day-1.html      # HTML entry point — renders the page in the browser
├── day-1.css       # Styles — black full-screen background with centered white text
└── day-1.js        # JavaScript — variable declarations and console output
```

---

## 🧾 Source Code Walkthrough

### `day-1.js`

```js
let a = 10;
let b = 5;

console.log("a =", a, "b =", b);
console.log("a+b =", a + b);
```

**Line-by-line explanation:**

| Line | Code | What it does |
|------|------|--------------|
| 1 | `let a = 10;` | Declares a variable `a` and assigns the numeric value `10` |
| 2 | `let b = 5;` | Declares a variable `b` and assigns the numeric value `5` |
| 4 | `console.log("a =", a, "b =", b);` | Prints both variable values to the console |
| 5 | `console.log("a+b =", a+b);` | Computes `a + b` inline and prints the result |

---

### `day-1.html`

A minimal HTML boilerplate that:
- Sets the page character encoding and viewport for responsiveness.
- Links the external CSS file (`day-1.css`).
- Renders a centered `<p>` tag with the text **"Day 1 of javascript"**.
- Loads the JavaScript file (`day-1.js`) via a `<script>` tag placed before `</html>` so the DOM is ready.

---

### `day-1.css`

Styles the page with:
- A **full-viewport black background** (`height: 100vh; width: 100vw; background-color: black;`).
- **Flexbox centering** to perfectly center the heading text horizontally and vertically.
- White text at `2rem` font size for clear visibility.

---

## 🖥️ Expected Console Output

Open the browser's **DevTools Console** (`F12` → Console tab) after opening `day-1.html`:

```
a = 10 b = 5
a+b = 15
```

---

## 🚀 How to Run

1. Navigate to the `Day 1 - Variables/` folder.
2. Open `day-1.html` in any modern web browser (Chrome, Firefox, Edge, etc.).
3. Press `F12` to open **Developer Tools**.
4. Click on the **Console** tab.
5. You will see the output printed by `day-1.js`.

---

## 💡 Key Takeaways

- `let` is the preferred way to declare variables in modern JavaScript.
- Variables store data that can be referenced and manipulated throughout your code.
- `console.log()` is your best friend for debugging and understanding what your code is doing.
- JavaScript evaluates expressions like `a + b` directly inside `console.log()`.

---

## 🔗 Navigation

| Previous | Next |
|----------|------|
| _(Start of Challenge)_ | [Day 2 — Data Types](../Day%202%20-%20Data%20types/) |

---

*Part of the [100 Days of JavaScript](../) challenge.*
