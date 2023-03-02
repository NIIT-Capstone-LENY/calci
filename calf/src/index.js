import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./style.css";

function App() {
  const [display, setDisplay] = useState("");  //here [display-input value ,setDisplay-the changed value] and useState(default value) is a hook ("") this is a string 
  const [expression, setExpression] = useState([]); //same as above just ([]) this means it is an array

  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  }; //function used to set the value on click

  const handleResult = () => {
    const result = expression.join("").split(/(\D)/g).map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))    
    .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
// expression.join("") concatenates all the elements of the expression array into a single string.

// split(/(\D)/g) splits the string into an array of substrings by matching all non-digit characters (\D). The g flag is used to perform a global search, i.e., to find all matches rather than stopping after the first match.

// map(value => (value.match(/\d/g) ? parseInt(value, 0) : value)) maps each substring to either a number (if it contains only digits) or the original string (if it contains non-digit characters).

// reduce((acc, value, index, array) => {...}) applies 
//a function to each element of the mapped array, accumulating the result. The function takes four parameters:

// acc: the accumulator, initialized to the first element of the array.
// value: the current element of the array.
// index: the index of the current element.
// array: the original array.

    setDisplay(result);
    setExpression("");
  };

  return (
    <div className="App">
      <h3 className="display">{display}</h3>

      <span className="expression">{expression}</span>

      <section className="panel">
        <section className="numbers">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(0)}>0</button>
        </section>

        <section className="operators">
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </section>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);