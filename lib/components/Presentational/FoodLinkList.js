import React from 'react'
import PropTypes from 'prop-types';

import FoodLink from './FoodLink';

// Change background color of menu
// Center menu
// set behavior, hidden before search, after click gone

const style = {
  // display: 'none',
  position: 'absolute',
  backgroundColor: 'white',
  minWidth: '400px',
  border: '1px solid black',
  zIndex: '1'
}

const FoodLinkList = ({queryResults, onLinkClick}) => {
  return(
    <div style={style}>
      {queryResults.map((result, index) =>(
        <FoodLink 
          key={index}
          {...result}
          onClick={onLinkClick}/> 
        ))}
    </div>
  )
}

export default FoodLinkList;