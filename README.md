## Simple Calculator

This is a simple calculator web application built using HTML, CSS, and JavaScript. 

### Functionality

The calculator allows users to perform basic arithmetic operations, including:

- **Addition (+)**
- **Subtraction (-)**
- **Multiplication (*)**
- **Division (/)**
- **Percentage (%)**

It also includes functionality for:

- **Clearing the display (C)**
- **Deleting the last entered character (←)**
- **Using parentheses for grouping ( )**
- **Evaluating expressions (=)**

### Features Used

#### HTML (`index.html`)

- **Structure:** The HTML file defines the basic structure of the calculator, including the display screen and the buttons for input.
- **Input Field:** An input field (`<input type="text" id="display">`) is used to display the input and output.
- **Buttons:** Buttons (`<button>`) are used for each digit, operator, and function.
- **Event Listeners:**  Inline JavaScript (`onclick`) is used to trigger functions in the JavaScript file when buttons are clicked.

#### CSS (`style.css`)

- **Layout:** CSS is used to style the calculator, including its overall layout, colors, font sizes, and button appearance.
- **Grid:** The calculator buttons are arranged using a CSS grid (`display: grid`) for a clean and responsive layout.
- **Hover Effects:**  Hover effects are added to the buttons to provide visual feedback to the user.
- **Background Image:** A background image is applied to enhance the visual appeal of the calculator.

#### JavaScript (`calculator.js`)

- **Functions:** The JavaScript file contains functions to handle button clicks, append values to the display, perform calculations, and handle errors.
- **`append(value)`:**  Appends a given value to the display input.
- **`clearDisplay()`:** Clears the display input field.
- **`calculate()`:** Evaluates the expression entered in the display input and displays the result. Handles potential errors using a `try...catch` block.
- **`cutstring()`:** Removes the last character from the display input.
- **`toggleBracket()`:**  Adds either an opening or closing parenthesis to the display input, ensuring correct pairing.
- **Keyboard Support:** The calculator also supports keyboard input, allowing users to perform calculations using the keyboard.

### How to Use

1. **Open `index.html` in your web browser.** 
2. **Click the calculator buttons to input numbers and operators.**
3. **Use the `=` button to evaluate the expression.**
4. **The result will be displayed in the input field.**
5. **The `C` button clears the display, and the `←` button deletes the last entered character.**
6. **You can also use your keyboard to input numbers, operators, and parentheses.**
7 **Press "Enter" to calculate and "Escape" to clear the input**
8. **Enjoy calculating!**
