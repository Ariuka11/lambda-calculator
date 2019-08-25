import React, {useState}  from "react";
import SpecialButton from './SpecialButton'
//import any components needed
import {specials} from '../../../data';
//Import your array data to from the provided data file

const Specials = ({ updateValue, resetValue, backSpace }) => {
  // STEP 2 - add the imported data to state
 const [specialsState] = useState(specials)

 const clickSpecialButton = button => {
   button === 'C' ? resetValue() : updateValue (button)
 }
 const clickBackSpace = button => {
   if(button === '<=') {
    return backSpace()
   }
 }
 
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsState.map( special => {
        return <SpecialButton 
          special = {special} 
          updateValue= {() => clickSpecialButton(special)}
          backSpace = {() => clickBackSpace(special)} />
       })}
    </div>
  );
};

export default Specials;
