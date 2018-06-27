import React from 'react';

const MacrosCounter = ({entryMacros}) => {
  return(
    <div>
      Protein: {entryMacros[1]}g, 
      Fat: {entryMacros[2]}g, 
      Carbs: {entryMacros[3]}g, 
      Total Calories: {entryMacros[0]} cal
    </div>
  )
}

export default MacrosCounter;