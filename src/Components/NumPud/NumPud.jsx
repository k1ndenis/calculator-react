import React, { useEffect } from "react";

const NumPud = (props) => {
  const { value, touch } = props

  const numbers = '1234567890';

  const Calculate = () => {
    function calculateBrackets(val) {
      let brackets = val.slice(val.indexOf('(') + 1, val.indexOf(')'))
      const result = calculate(brackets);
      val = val.slice(0, val.indexOf('(')) + result + val.slice(val.indexOf(')') + 1);
      touch(val)
      return(val);
    }
    function calculate(val) {
      const split = val.split(/[%÷x+-]+/)
      let sum = +split[0];
      const signs = [];
      val.split('').map(item => {
        if (!numbers.includes(item)) {
          signs.push(item);
        }
      })
      if (!split.at(-1)) {
        split.pop();
        signs.pop();
      }
      for (let i = 0; i <= signs.length; i++) {
        if (signs[i] == '%') {
          sum = sum / 100 * +split[i + 1];
        }
        if (signs[i] == '÷') {
          sum = sum / +split[i + 1];
        }
        if (signs[i] == 'x') {
          sum = sum * +split[i + 1];
        }
        if (signs[i] == '+') {
          sum = sum + +split[i + 1];
        }
        if (signs[i] == '-') {
          sum = sum - +split[i + 1];
        }
      }
      return String(sum);
    }
    let currentValue = value;
    while (currentValue.includes('(')) {
      currentValue = calculateBrackets(currentValue);
    }
    touch(calculate(currentValue));
  }

  return (
    <div>
      <button onClick={() => touch('')}>
        <h1>AC</h1>
      </button>
      <button onClick={() => {
         const openCount = value.split('').filter(a => a == "(").length;
         const closeCount = value.split('').filter(a => a == ")").length
        if (openCount > closeCount && value.at(-1) != ('(') ) {
          touch(value + ')')
        } else if (!numbers.includes(value.at(-1)) && value.at(-1) != ('(') && value.at(-1) != (')')) {
          touch(value + '(')
        }
      }}>
        <h1>()</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) || value.at(-1) == ')' ? touch(value + '%') : touch(value)}>
        <h1>%</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) || value.at(-1) == ')' ? touch(value + '÷') : touch(value)}>
        <h1>÷</h1>
      </button>
      <br/>
      <button onClick={() => touch(value + 7)}>
        <h1>7</h1>
      </button>
      <button onClick={() => touch(value + 8)}>
        <h1>8</h1>
      </button>
      <button onClick={() => touch(value + 9)}>
        <h1>9</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) || value.at(-1) == ')' ? touch(value + 'x') : touch(value)}>
        <h1>x</h1>
      </button>
      <br/>
      <button onClick={() => touch(value + 4)}>
        <h1>4</h1>
      </button>
      <button onClick={() => touch(value + 5)}>
        <h1>5</h1>
      </button>
      <button onClick={() => touch(value + 6)}>
        <h1>6</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) || value.at(-1) == ')' ? touch(value + '-') : touch(value)}>
        <h1>-</h1>
      </button>
      <br/>
      <button onClick={() => touch(value + 1)}>
        <h1>1</h1>
      </button>
      <button onClick={() => touch(value + 2)}>
        <h1>2</h1>
      </button>
      <button onClick={() => touch(value + 3)}>
        <h1>3</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) || value.at(-1) == ')' ? touch(value + '+') : touch(value)}>
        <h1>+</h1>
      </button>
      <br/>
      <button onClick={() => touch(value + 0)}>
        <h1>0</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) && !value.includes('.') ? touch(value + '.') : touch(value)}>
        <h1>.</h1>
      </button>
      <button onClick={() => touch(value.slice(0, -1))}>
        <h1>⌫</h1>
      </button>
      <button onClick={() => Calculate(value)}>
        <h1>=</h1>
      </button>
    </div>
  )
}

export default NumPud;
