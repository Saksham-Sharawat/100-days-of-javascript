# 🔄 Day 14 - Reverse String

## 📝 Overview

On Day 14, I built a **Reverse String** program using JavaScript. This project focuses on the concept of **recursion** — a function that calls itself — to reverse a given string character by character.

---

## 🧠 Concepts Learned

### ✅ Recursion
**Recursion** is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a **base case** to stop the recursion.

### ✅ How the Recursion Works (Step-by-step)

For input `"abc"`:

| Call | `str`  | `nextStep` | `reversedPart` | `firstChar` | Returns  |
|------|--------|------------|----------------|-------------|----------|
| 1st  | `"abc"` | `"bc"`    | (waits…)       | `"a"`       | `"cba"`  |
| 2nd  | `"bc"`  | `"c"`     | (waits…)       | `"b"`       | `"cb"`   |
| 3rd  | `"c"`   | `""`      | (waits…)       | `"c"`       | `"c"`    |
| 4th  | `""`    | —         | `""` (base)    | —           | `""`     |

### ✅ String Methods Used

| Method         | Description                                      |
|----------------|--------------------------------------------------|
| `str.slice(1)` | Returns the string without its first character   |
| `str.charAt(0)`| Returns the first character of the string        |

### ✅ Base Case
The recursion stops when the string is empty (`""`), returning `""` immediately to unwind the call stack.

---

## 📁 Files

| File               | Description                        |
|--------------------|------------------------------------|
| `day-14.html`      | HTML structure / entry point       |
| `day-14.css`       | Styling with animated glassmorphic card |
| `day-14.js`        | Core recursive JavaScript logic    |

---

## 💡 How It Works

1. The user is prompted to enter any **word or string**.
2. The `reverseString()` function is called **recursively**:
   - It slices off the first character each time.
   - On the way back (unwinding), it appends the first character to the end.
3. The **original** and **reversed** string are both logged to the console.

---

## 🖥️ Sample Console Output

```
===== Reverse string =====

Original string : Hello
Reversed string : olleH

Thank you for using the program!😊
To use it again just reload the page!
```

---

## 🚀 How to Run

1. Open `day-14.html` in any modern web browser.
2. When prompted, enter any **word or sentence** to reverse.
3. Open **DevTools → Console** (press `F12`) to view the output.

---
