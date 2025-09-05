Perfect 👍 Adding a **📌 Table of Contents** will make your README more professional and super easy to navigate on GitHub.
Here’s the fully updated version with clickable links to all sections:

```markdown
# 📘 JavaScript_Learning_Code

Welcome to **JavaScript_Learning_Code**!  
This repository provides practical JavaScript examples covering **fundamentals, ES6 concepts, async programming, and error handling**.  
All examples are organized into topic-based directories for easy navigation.

---

## 📌 Table of Contents

- [📂 Directory Structure](#-directory-structure)
- [📑 File Descriptions](#-file-descriptions)
  - [JavaScript.js](#javascriptjs)
  - [JavaScriptOperators/Operators.js](#javascriptoperatorsoperatorsjs)
  - [JavaScriptVariables](#javascriptvariables)
    - [Variables.js](#javascriptvariablesvariablesjs)
    - [DataTypes.js](#javascriptvariablesdatatypesjs)
    - [ConstObject.js](#javascriptvariablesconstobjectjs)
  - [JavaScriptObjects/JavaScriptObjects.js](#javascriptobjectsjavascriptobjectsjs)
  - [JavaScriptArrays](#javascriptarrays)
    - [Arrays.js](#javascriptarraysarraysjs)
    - [ArrayMethods.js](#javascriptarraysarraymethodsjs)
  - [JavaScriptErrors/TryCatchInJavaScript.js](#javascripterrorstrycatchinjavascriptjs)
  - [JavaScriptAsyncAwait/JsAsyncAwait.js](#javascriptasyncawaitjsasyncawaitjs)
  - [JavaScriptClass](#javascriptclass)
    - [ClassBasics.js](#javascriptclassclassbasicsjs)
    - [Inheritance.js](#javascriptclassinheritancejs)
    - [StaticMethods.js](#javascriptclassstaticmethodsjs)
- [▶️ Getting Started](#️-getting-started)
- [🖥️ Quick Examples](#️-quick-examples)
- [🎯 Goal of This Repo](#-goal-of-this-repo)

---

## 📂 Directory Structure

```

JavaScript\_Learning\_Code/
│
├── JavaScript.js
│
├── JavaScriptOperators/
│   └── Operators.js
│
├── JavaScriptVariables/
│   ├── Variables.js
│   ├── DataTypes.js
│   └── ConstObject.js
│
├── JavaScriptObjects/
│   └── JavaScriptObjects.js
│
├── JavaScriptArrays/
│   ├── Arrays.js
│   └── ArrayMethods.js
│
├── JavaScriptErrors/
│   └── TryCatchInJavaScript.js
│
├── JavaScriptAsyncAwait/
│   └── JsAsyncAwait.js
│
└── JavaScriptClass/
├── ClassBasics.js
├── Inheritance.js
└── StaticMethods.js

````

---

## 📑 File Descriptions

### [`JavaScript.js`](JavaScript.js)
- **Purpose:** First step with JavaScript – logs `"Hello JavaScript"` to the console.

---

### [`JavaScriptOperators/Operators.js`](JavaScriptOperators/Operators.js)
- **Purpose:** Demonstrates the use of JavaScript operators.
- **Topics Covered:**
  - Arithmetic (`+`, `-`, `*`, `/`)
  - Comparison (`==`, `===`)
  - Logical (`&&`, `||`, `!`)
  - Assignment (`=`, `+=`, `-=`)

---

### [`JavaScriptVariables/Variables.js`](JavaScriptVariables/Variables.js)
- **Purpose:** Explains `var`, `let`, and `const` with scope & reassignment rules.

### [`JavaScriptVariables/DataTypes.js`](JavaScriptVariables/DataTypes.js)
- **Purpose:** Covers primitive data types.
- **Topics Covered:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

### [`JavaScriptVariables/ConstObject.js`](JavaScriptVariables/ConstObject.js)
- **Purpose:** Shows how `const` objects can have mutable properties but cannot be reassigned.

---

### [`JavaScriptObjects/JavaScriptObjects.js`](JavaScriptObjects/JavaScriptObjects.js)
- **Purpose:** Provides a comprehensive look at objects.
- **Topics Covered:** Creating objects, adding properties, constructors, methods, and iteration.

---

### [`JavaScriptArrays/Arrays.js`](JavaScriptArrays/Arrays.js)
- **Purpose:** Basics of array creation and usage.

### [`JavaScriptArrays/ArrayMethods.js`](JavaScriptArrays/ArrayMethods.js)
- **Purpose:** Demonstrates powerful array methods.
- **Topics Covered:** `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, `reduce()`.

---

### [`JavaScriptErrors/TryCatchInJavaScript.js`](JavaScriptErrors/TryCatchInJavaScript.js)
- **Purpose:** Handling runtime errors using `try...catch`.

---

### [`JavaScriptAsyncAwait/JsAsyncAwait.js`](JavaScriptAsyncAwait/JsAsyncAwait.js)
- **Purpose:** Explains asynchronous programming.
- **Topics Covered:** Callbacks → Promises → `async/await`.

---

### [`JavaScriptClass/ClassBasics.js`](JavaScriptClass/ClassBasics.js)
- **Purpose:** Basics of creating and using classes.

### [`JavaScriptClass/Inheritance.js`](JavaScriptClass/Inheritance.js)
- **Purpose:** Demonstrates inheritance using `extends` and `super()`.

### [`JavaScriptClass/StaticMethods.js`](JavaScriptClass/StaticMethods.js)
- **Purpose:** Shows static methods and properties belonging to the class itself.

---

## ▶️ Getting Started

To run the examples:

1. **Install Node.js** → [Download here](https://nodejs.org/)  
2. Open a **terminal/command prompt**.  
3. Navigate to the folder containing the `.js` file.  
4. Run the file with:

   ```sh
   node path/to/file.js
````

**Example:**

```sh
node JavaScriptClass/ClassBasics.js
```

---

## 🖥️ Quick Examples

### Variables

```javascript
let name = "Himen";
const age = 25;
var city = "Ahmedabad";
```

### Objects

```javascript
let user = { name: "Himen", age: 25 };
console.log(user.name); // Himen
```

### Arrays

```javascript
let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
```

### Async/Await

```javascript
async function showGreeting() {
  let message = await new Promise(resolve =>
    setTimeout(() => resolve("Hello!"), 1000)
  );
  console.log(message);
}

showGreeting(); // "Hello!" after 1s
```

### Classes

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Tommy");
dog.speak(); // Tommy barks.
```

---

## 🎯 Goal of This Repo

The aim of this repo is to **simplify JavaScript learning** with clear, hands-on examples of every major concept.
Perfect for beginners and quick refreshers alike. 🚀

---