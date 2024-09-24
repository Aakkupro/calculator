function append(value) {
    document.getElementById('display').classList.remove('error');
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display').classList.remove('error');
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Automatically insert a multiplication operator where needed
        let expression = display.value.replace(/(\d)(\()/g, '$1*(');
        expression = expression.replace(/(\))(\d)/g, ')*$2');
        
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
        display.classList.add('error');
    }
}

function cutstring() {
    let str = document.getElementById('display').value;
    document.getElementById('display').value = str.substring(0, str.length - 1);
}

function toggleBracket() {
    const display = document.getElementById('display');
    const openBrackets = (display.value.match(/\(/g) || []).length;
    const closeBrackets = (display.value.match(/\)/g) || []).length;
    if (openBrackets <= closeBrackets) {
        append('(');
    } else {
        append(')');
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d|\+|\-|\*|\/|\./.test(key)) {
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        cutString();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '(' || key === ')') {
        toggleBracket();
    }
}); 