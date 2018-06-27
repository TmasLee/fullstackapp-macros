import React from 'react';

const style = {
  // position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  textAlign: 'center'
}

const DatabaseDisplay = (props) => {
  return (
    <div style={style}>
      <svg width={'400'} height={'110'}>
        <rect width='400' height='110'/>
        <text fill="#44ffff" fontSize="45" fontFamily="Verdana" x="150" y="96">Database</text>
      </svg>      
    </div>
  );
};

export default DatabaseDisplay;