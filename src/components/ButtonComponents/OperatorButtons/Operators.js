import React, {useState}  from "react";
import OperatorButton from './OperatorButton'
//import any components needed
import {operators} from '../../../data'
//Import your array data to from the provided data file

const Operators = ({updateValue , calculateValue}) => {
  // STEP 2 - add the imported data to state
const [operatorsState] = useState(operators);
const clickOperatorButton = button => { 
  button === '=' ? calculateValue() : updateValue(button)
}
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsState.map(operator  => {
         return <OperatorButton 
            operator = {operator}
            clickOperatorButton = {() => clickOperatorButton(operator.value)} />
       })}
    </div>
  );
};

export default Operators;
