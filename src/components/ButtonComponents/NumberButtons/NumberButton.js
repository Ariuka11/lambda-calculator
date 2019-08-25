import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick = {props.clickButton} id = {props.isZero ? 'zero' : 'numbers'}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;