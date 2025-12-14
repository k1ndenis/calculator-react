import React from "react";

const NumPud = (props) => {
  const { value, touch } = props

  const numbers = '1234567890';

  const Calculate = () => {
    const split = value.split(/[%÷x+-]+/)
    let sum = +split[0];
    const signs = [];
    value.split('').map(item => {
      if (!numbers.includes(item)) {
        signs.push(item);
      }
    })
    for (let i = 0; i <= signs.length; i++) {
      if (signs[i] == '%') {
        sum = sum % +split[i + 1];
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
    
    console.log(split)
    console.log(signs)
    console.log(sum)
  }

  return (
    <div>
      <button>
        <h1>AC</h1>
      </button>
      <button>
        <h1>()</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) ? touch(value + '%') : touch(value)}>
        <h1>%</h1>
      </button>
      <button onClick={() => numbers.includes(value.at(-1)) ? touch(value + '÷') : touch(value)}>
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
      <button onClick={() => numbers.includes(value.at(-1)) ? touch(value + 'x') : touch(value)}>
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
      <button onClick={() => numbers.includes(value.at(-1)) ? touch(value + '-') : touch(value)}>
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
      <button onClick={() => numbers.includes(value.at(-1)) ? touch(value + '+') : touch(value)}>
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
