# 📅 Day 2 — Primitive Data Types

> **100 Days of JavaScript Challenge**
> 🗓️ Topic: JavaScript's 7 Primitive Data Types & the `typeof` Operator

---

## 🎯 Learning Objective

On Day 2, the focus shifts from storing values to understanding **what kind of values** JavaScript can hold. JavaScript is a **dynamically typed** language — meaning a variable's type is determined at runtime, not at declaration. Day 2 explores all **7 primitive data types** and how to inspect them using the `typeof` operator.

---

## 📚 Concepts Covered

### What is a Data Type?

A **data type** defines:
1. The **kind of value** a variable can hold.
2. The **operations** that can be performed on that value.

JavaScript has two main categories of data types:

```
JavaScript Data Types
├── Primitive (7 types) ← Focus of Day 2
│   ├── string
│   ├── number
│   ├── boolean
│   ├── undefined
│   ├── null
│   ├── bigint
│   └── symbol
└── Non-Primitive (Reference Types)
    ├── object
    ├── array
    └── function
```

---

### The 7 Primitive Data Types

#### 1. 🔤 `string`
Represents **textual data**. Strings must be wrapped in single quotes `'...'`, double quotes `"..."`, or backticks `` `...` `` (template literals).

```js
let Name = "Saksham";
console.log("Name =", Name);               // Name = Saksham
console.log("Data type of Name =", typeof Name); // Data type of Name = string
```

---

#### 2. 🔢 `number`
Represents both **integers and floating-point numbers**. JavaScript does not distinguish between `int` and `float` — they are all just `number`.

```js
let Age = 19;
console.log("Age =", Age);                 // Age = 19
console.log("Data type of Age=", typeof Age);    // Data type of Age= number
```

> ⚠️ JavaScript numbers follow the **IEEE 754** double-precision floating-point standard. This means very large or very precise numbers can have rounding issues — which is exactly why `BigInt` exists!

---

#### 3. ✅ `boolean`
Represents a **logical value**: either `true` or `false`. Booleans are the backbone of conditions and control flow.

```js
let isStudent = true;
console.log("isStudent =", isStudent);              // isStudent = true
console.log("Data type of isStudent =", typeof isStudent); // Data type of isStudent = boolean
```

---

#### 4. ❓ `undefined`
A variable that has been **declared but not assigned** a value automatically gets the value `undefined`. It signals the absence of an intentional value.

```js
let a;
console.log("a =", a);              // a = undefined
console.log("Data type of a =", typeof a); // Data type of a = undefined
```

> **Tip:** `undefined` is JavaScript's way of saying *"this variable exists, but I don't know what it is yet."*

---

#### 5. 🚫 `null`
Represents an **intentional absence of value**. It is explicitly assigned by the developer to indicate "no value here."

```js
let b = null;
console.log("b =", b);              // b = null
console.log("Data type of b =", typeof b); // Data type of b = object ⚠️
```

> ⚠️ **Famous JavaScript Quirk:** `typeof null` returns `"object"` — this is a **known bug** in JavaScript that has existed since its creation and was never fixed to maintain backward compatibility. `null` is **not** an object; it is a primitive.

| | `undefined` | `null` |
|---|---|---|
| **Assigned by** | JavaScript (automatically) | Developer (intentionally) |
| **Meaning** | Variable exists, no value yet | Variable exists, value is empty |
| **`typeof`** | `"undefined"` | `"object"` (bug!) |

---

#### 6. 🔢 `bigint`
Represents **integers of arbitrary precision** — numbers larger than `Number.MAX_SAFE_INTEGER` (`2^53 - 1`). Created using `BigInt()` or by appending `n` to a literal.

```js
let c = BigInt("123456789");
console.log("c =", c);              // c = 123456789n
console.log("Data type of c =", typeof c); // Data type of c = bigint
```

> **Use case:** Cryptography, handling very large database IDs, or any scenario where precision beyond `9007199254740991` is needed.

---

#### 7. 🔑 `symbol`
Represents a **unique and immutable identifier**. Every `Symbol()` call creates a completely unique value, even if you pass the same description string. Symbols are often used as unique property keys in objects.

```js
let d = Symbol("Hello!");
console.log("d =", d);              // d = Symbol(Hello!)
console.log("Data type of d =", typeof d); // Data type of d = symbol
```

> **Key property:** `Symbol("Hello!") === Symbol("Hello!")` evaluates to `false` — every symbol is always unique.

---

### The `typeof` Operator

`typeof` is a **unary operator** that returns a string describing the type of its operand. It is extremely useful for runtime type checking.

**Summary of `typeof` results for all 7 primitives:**

| Value | `typeof` Result |
|-------|----------------|
| `"Saksham"` | `"string"` |
| `19` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` ⚠️ (historical bug) |
| `BigInt("123456789")` | `"bigint"` |
| `Symbol("Hello!")` | `"symbol"` |

---

## 📁 File Structure

```
Day 2 - Data types/
├── day-2.html      # HTML entry point — renders the page in the browser
├── day-2.css       # Styles — black full-screen background with centered white text
└── day-2.js        # JavaScript — all 7 primitive data types with typeof checks
```

---

## 🧾 Source Code Walkthrough

### `day-2.js`

```js
console.log("Types of primitive data type");

// string
let Name = "Saksham";
console.log("Name =", Name);
console.log("Data type of Name =", typeof Name);

// number
let Age = 19;
console.log("Age =", Age);
console.log("Data type of Age=", typeof Age);

// boolean
let isStudent = true;
console.log("isStudent =", isStudent);
console.log("Data type of isStudent =", typeof isStudent);

// undefined
let a;
console.log("a =", a);
console.log("Data type of a =", typeof a);

// null
let b = null;
console.log("b =", b);
console.log("Data type of b =", typeof b);

// bigint
let c = BigInt("123456789");
console.log("c =", c);
console.log("Data type of c =", typeof c);

// symbol
let d = Symbol("Hello!");
console.log("d =", d);
console.log("Data type of d =", typeof d);
```

**Pattern used throughout:** For each data type, the code:
1. **Declares** a variable of that type.
2. **Logs the value** using `console.log()`.
3. **Logs the type** using the `typeof` operator.

This consistent pattern makes it easy to compare types side-by-side in the console.

---

### `day-2.html`

A minimal HTML boilerplate that:
- Sets up standard meta tags (charset, viewport).
- Links the external `day-2.css` stylesheet.
- Displays two centered `<p>` tags: **"Day 2 of javascript"** and **"(Data types)"**.
- Loads `day-2.js` via a `<script>` tag at the bottom of the document.

---

### `day-2.css`

Identical in structure to Day 1's CSS — providing a **full-viewport black background** with **flexbox-centered** white text at `2rem`. The `text-align: center` property is added here to properly center the two stacked `<p>` elements.

---

## 🖥️ Expected Console Output

Open the browser's **DevTools Console** (`F12` → Console tab) after opening `day-2.html`:

```
Types of primitive data type
Name = Saksham
Data type of Name = string
Age = 19
Data type of Age= number
isStudent = true
Data type of isStudent = boolean
a = undefined
Data type of a = undefined
b = null
Data type of b = object
c = 123456789n
Data type of c = bigint
d = Symbol(Hello!)
Data type of d = symbol
```

---

## 🚀 How to Run

1. Navigate to the `Day 2 - Data types/` folder.
2. Open `day-2.html` in any modern web browser (Chrome, Firefox, Edge, etc.).
3. Press `F12` to open **Developer Tools**.
4. Click on the **Console** tab.
5. You will see all 7 primitive data types and their `typeof` results printed in sequence.

---

## 💡 Key Takeaways

- JavaScript has **7 primitive data types**: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`.
- Primitives are **immutable** — their values cannot be changed directly (only reassigned).
- The `typeof` operator returns a **string** describing the type of a value at runtime.
- `typeof null === "object"` is a **historical bug** — `null` is NOT an object.
- `undefined` is set automatically; `null` is set intentionally by developers.
- `BigInt` handles numbers beyond the safe integer limit for `number`.
- Every `Symbol` is always **unique**, even with the same description.

---

## 🔗 Navigation

| Previous | Next |
|----------|------|
| [Day 1 — Variables](../Day%201%20-%20Variables/) | _(Day 3 coming soon)_ |

---

*Part of the [100 Days of JavaScript](../) challenge.*
