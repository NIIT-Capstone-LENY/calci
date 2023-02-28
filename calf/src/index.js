import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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
    setDisplay(result);
    setExpression("");
  };}
