import React from 'react'
import PropTypes from 'prop-types';

import FoodLink from './FoodLink';

const style = {
  position: 'absolute',
  backgroundColor: 'white',
  minWidth: '400px',
  maxWidth: '500px',
  textAlign: 'center',
  border: '1px solid black',
  zIndex: '1000',
  opacity: '2'
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