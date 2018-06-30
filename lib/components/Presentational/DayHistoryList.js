import React from 'react';

const style = {
  listStyleType: 'none',
  zIndex: '1000'
}

const DayHistoryList = ({allDays,handleClick}) => {
  return (
    <ul style={style}>
      {allDays.map((day,i)=>(
        <li 
          key={i}
          onClick={(e)=>{
            e.preventDefault();
            handleClick(day);
          }}
        >
          {day.day_obj}
        </li>
      ))}
    </ul>
    )
}

export default DayHistoryList;