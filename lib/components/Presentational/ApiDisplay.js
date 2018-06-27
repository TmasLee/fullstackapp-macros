import React from 'react';

const style = {
  display: 'absolute',
  float: 'right',
  // right: '0',
}

const ApiDisplay = (props) => {
  return (
  <div style={style}>
    <svg width={'200'} height={'100'}>
      <rect width='200' height='100'/>
      <text fill="#44ffff" fontSize="35" fontFamily="Verdana" x="100" y="96">Api</text>
    </svg>      
  </div>
  );
};

export default ApiDisplay;