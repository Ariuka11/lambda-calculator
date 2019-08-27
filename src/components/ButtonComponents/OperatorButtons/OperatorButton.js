import React from "react";

const OperatorButton = ({operator: {char, value}, clickOperatorButton}) => {
  return (
    <button onClick = {clickOperatorButton} id = 'operators'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {char}
    </button>
  );
};
 export default OperatorButton;