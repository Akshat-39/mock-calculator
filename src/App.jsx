import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  // Helper for factorial
  const factorial = (n) => {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  // Helper for nth root
  const nthRoot = (x, n) => {
    if (n === 0) return 'Error';
    if (x < 0 && n % 2 === 0) return 'Error';
    return Math.pow(x, 1 / n);
  };

  // Handle scientific functions
  const handleFunction = (func) => {
    let value = parseFloat(display);
    let result;
    switch (func) {
      case 'sin':
        result = Math.sin(value);
        break;
      case 'cos':
        result = Math.cos(value);
        break;
      case 'tan':
        result = Math.tan(value);
        break;
      case 'x2':
        result = Math.pow(value, 2);
        break;
      case 'sqrt':
        result = value < 0 ? 'Error' : Math.sqrt(value);
        break;
      case 'fact':
        result = factorial(value);
        break;
      case 'log':
        result = value <= 0 ? 'Error' : Math.log10(value);
        break;
      case 'ln':
        result = value <= 0 ? 'Error' : Math.log(value);
        break;
      case 'pi':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      default:
        result = value;
    }
    setDisplay(String(result));
    setWaitingForOperand(true);
  };

  // For x^y and y√x, we use performOperation with special operators
  const performSpecialOperation = (specialOp) => {
    const inputValue = parseFloat(display);
    if (specialOp === 'x^y') {
      setFirstOperand(inputValue);
      setOperator('^');
      setWaitingForOperand(true);
    } else if (specialOp === 'yroot') {
      setFirstOperand(inputValue);
      setOperator('root');
      setWaitingForOperand(true);
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);
    if (operator && waitingForOperand) {
      setOperator(nextOperator);
      return;
    }
    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }
    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const calculate = (first, second, operator) => {
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '×':
        return first * second;
      case '÷':
        return second === 0 ? 'Error' : first / second;
      case '^':
        return Math.pow(first, second);
      case 'root':
        return nthRoot(first, second);
      default:
        return second;
    }
  };

  const handleEquals = () => {
    if (operator && firstOperand != null && !waitingForOperand) {
      const result = calculate(firstOperand, parseFloat(display), operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-keypad">
          {/* Scientific row */}
          <button className="key" onClick={() => handleFunction('sin')}>sin</button>
          <button className="key" onClick={() => handleFunction('cos')}>cos</button>
          <button className="key" onClick={() => handleFunction('tan')}>tan</button>
          <button className="key" onClick={() => handleFunction('pi')}>π</button>
          <button className="key" onClick={() => handleFunction('e')}>e</button>
          <button className="key" onClick={() => handleFunction('x2')}>x²</button>
          <button className="key" onClick={() => performSpecialOperation('x^y')}>xʸ</button>
          <button className="key" onClick={() => handleFunction('sqrt')}>√</button>
          <button className="key" onClick={() => performSpecialOperation('yroot')}>ʸ√x</button>
          <button className="key" onClick={() => handleFunction('fact')}>n!</button>
          <button className="key" onClick={() => handleFunction('log')}>log</button>
          <button className="key" onClick={() => handleFunction('ln')}>ln</button>

          {/* Standard row */}
          <button className="key key-ac" onClick={clearAll}>AC</button>
          <button className="key key-op" onClick={() => performOperation('÷')}>÷</button>
          <button className="key key-op" onClick={() => performOperation('×')}>×</button>
          <button className="key key-op" onClick={() => performOperation('-')}>-</button>
          <button className="key" onClick={() => inputDigit('7')}>7</button>
          <button className="key" onClick={() => inputDigit('8')}>8</button>
          <button className="key" onClick={() => inputDigit('9')}>9</button>
          <button className="key key-op" onClick={() => performOperation('+')}>+</button>
          <button className="key" onClick={() => inputDigit('4')}>4</button>
          <button className="key" onClick={() => inputDigit('5')}>5</button>
          <button className="key" onClick={() => inputDigit('6')}>6</button>
          <button className="key key-equals" onClick={handleEquals}>=</button>
          <button className="key" onClick={() => inputDigit('1')}>1</button>
          <button className="key" onClick={() => inputDigit('2')}>2</button>
          <button className="key" onClick={() => inputDigit('3')}>3</button>
          <button className="key key-zero" onClick={() => inputDigit('0')}>0</button>
          <button className="key" onClick={inputDot}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App
