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
