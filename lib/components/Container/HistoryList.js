import React from 'react';

const style = {
  position: 'absolute',
  left: 0
}

const HistoryList = (props) => {
  return (
    <div style={style}>
      <svg width={'150'} height={'600'}>
        <rect width='150' height='600'/>
        <text fill="#44ffff" fontSize="25" fontFamily="Verdana" x="40" y="50">History</text>
      </svg>      
  </div>
  );
};

export default HistoryList;