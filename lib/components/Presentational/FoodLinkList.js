import React from 'react'
import PropTypes from 'prop-types';

import FoodLink from './FoodLink';

const style = {
  position: 'absolute',
  background: 'rgba(255,255,255,1)',
  minWidth: '400px',
  maxWidth: '500px',
  textAlign: 'center',
  border: '1px solid black',
  zIndex: '9999',
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