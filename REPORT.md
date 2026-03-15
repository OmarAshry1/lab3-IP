# Lab 3 – My Interactive Calculator Webpage  
## Project Report

---

### Repository

**GitHub repository:** [https://github.com/OmarAshry1/lab3-IP.git](https://github.com/OmarAshry1/lab3-IP.git)

---

### Screenshot

*Add a screenshot of your calculator running in the browser below. You can place the image file in this folder (e.g. `screenshot.png`) and reference it as shown.*

![Calculator screenshot](screenshot.png)

*If your image has a different name, replace `screenshot.png` above with your file name.*

---

### Project Overview

This project is a **web-based calculator** that performs basic mathematical operations. It uses **HTML** for structure, **CSS** for styling, and **JavaScript** for behavior, following a clear separation of concerns.

---

### Technologies Used

| Technology | Purpose |
|------------|--------|
| HTML5     | Page structure, display, and button grid |
| CSS3      | Layout, colors, and responsive design (iOS-inspired theme) |
| JavaScript | DOM access, event handling, and calculator logic |

---

### Project Structure

```
Lab-3/
├── index.html    # Main page and calculator UI
├── styles.css    # Styling and theme
├── script.js     # Calculator logic and event handling
├── REPORT.md     # This report
└── screenshot.png  # (Add your screenshot here)
```

---

### Features

- **Basic operations:** addition (+), subtraction (−), multiplication (×), division (÷)
- **Percentage (%)** – converts current value to a percentage
- **AC (All Clear)** – resets the calculator
- **00** – appends double zero for quick input
- **Decimal (.)** – decimal point input
- **Chained operations** – e.g. 5 + 3 × 2 with correct sequencing
- **Division by zero** – shows "Error" and resets
- **Active operator highlight** – selected operator shown with white background
- **Responsive layout** – works on different screen sizes

---

### Implementation Approach (Hints Applied)

The JavaScript is organized according to the suggested structure:

1. **DOM (select nodes)**  
   - `document.getElementById("display")` for the result/input display  
   - `document.querySelector(".buttons")` for the button container  

2. **Event (listen)**  
   - A single **event delegation** listener on the button container handles all button clicks via `data-action` attributes.  

3. **Logic (functions)**  
   - **Display:** `updateDisplay()`  
   - **Input:** `inputDigit()`, `inputDecimal()`, `inputDoubleZero()`  
   - **Actions:** `clearAll()`, `applyPercent()`, `setOp()`, `equals()`  
   - **Computation:** `compute(a, operator, b)` for the four basic operations  

---

### How to Run

1. Clone the repository:  
   `git clone https://github.com/OmarAshry1/lab3-IP.git`
2. Open the project folder and double-click `index.html`, or open it with a browser via “Open file”.
3. Alternatively, use a local server (e.g. Live Server in VS Code) and open the provided URL.

---

### Conclusion

The calculator provides a clean, iOS-style interface and implements the required basic operations with efficient, event-driven JavaScript and a clear split between DOM, events, and logic.
