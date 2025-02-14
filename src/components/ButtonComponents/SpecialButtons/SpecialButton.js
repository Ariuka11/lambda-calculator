import React from "react";

const SpecialButton = ({special, updateValue ,backSpace}) => {
  return (
    <button onClick =  {() => {
            updateValue();
            backSpace();
          }} >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </button>
  );
};
 export default SpecialButton;
