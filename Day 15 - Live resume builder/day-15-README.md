# 📄 Day 15 - Live Resume Builder

## 📝 Overview

On Day 15, I built a **Live Resume Builder** using HTML, CSS, and JavaScript. The user fills in a simple form with their personal details, clicks a button, and a neatly formatted resume preview is instantly generated on the same page — no page reload needed.

---

## 🧠 Concepts Learned

### ✅ DOM Querying with `document.querySelector()`
Used to select input fields, the button, and the resume display container by their CSS class names.

### ✅ Reading Input Values
Each input field's `.value` property is read at button-click time to get what the user typed.

### ✅ Input Validation
Before generating the resume, the code checks whether **all fields** are filled in. If any field is empty, an error message is injected into the resume panel instead of the resume content.

### ✅ Dynamic HTML Injection with `innerHTML`
The resume preview is built by constructing an HTML string from the form values and assigning it directly to the `.resume-body` element's `innerHTML`.

### ✅ Iterating over DOM Elements
After injection, `querySelectorAll("p")` collects all the generated `<p>` tags and a `for` loop applies inline spacing (`marginBottom`) to each one.

---

## 📁 Files

| File               | Description                                      |
|--------------------|--------------------------------------------------|
| `day-15.html`      | HTML structure — form inputs and resume preview  |
| `day-15.css`       | Styling — blue-themed card layout and resume panel |
| `day-15.js`        | Core JavaScript logic — validation and rendering |

---

## 💡 How It Works

1. The user enters their **Name**, **Profession**, **College**, **Skills**, and **Career Goal** into the form on the left panel.
2. On clicking **Generate Resume**, the button's `click` event listener fires.
3. **Validation**: If any field is empty, an error message — *"Please enter all valid information in all fields"* — is displayed in the resume panel.
4. **Rendering**: If all fields are filled, the resume panel on the right is populated with the entered details as a formatted list of paragraphs.
5. Spacing between lines is applied dynamically via a loop using inline styles.

---

## 🗂️ Form Fields

| Field        | Input Type | Placeholder     |
|--------------|------------|-----------------|
| Name         | Text       | `Name`          |
| Profession   | Text       | `Profession`    |
| College      | Text       | `College`       |
| Skills       | Text       | `Skills`        |
| Career Goal  | Text       | `Career goal`   |

---

## 🖥️ Sample Resume Output

```
RESUME
──────────────────────────
Name: Saksham Sharawat
Profession: Software Developer
College: ABC University
Skills: JavaScript, HTML, CSS
Career goal: To build impactful web applications
```

---

## ⚠️ Error Handling

If any field is left blank and the button is clicked, the resume panel shows:

```
Please enter all valid information in all fields
```

The error message is styled in **red** via the `.error-msg` CSS class.

---

## 🚀 How to Run

1. Open `day-15.html` in any modern web browser.
2. Fill in **all five fields** in the form on the left.
3. Click the **Generate Resume** button.
4. Your resume preview appears instantly in the panel on the right!

---
