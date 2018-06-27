import React from 'react';

const servings = [1,2,3,4,5,6,7,8,9,10];

const ServingsDropdown = ({getServings}) => {
  return(
    <div>
      How many servings? 
      <select onChange={getServings}>
        <option value='0'>-</option>
        {servings.map((amt, index)=> 
          <option key={index}>
            {amt}
          </option>
        )}
      </select>
    </div>
  )
}

export default ServingsDropdown;