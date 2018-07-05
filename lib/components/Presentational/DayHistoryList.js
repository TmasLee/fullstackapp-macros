import React from 'react';

const style = {
  list: {
    listStyleType: 'none',
  },
  link: {
    textDecoration: 'none',
  },
  details: {
    border: '1px solid black',
    display: 'inline-block',
    textAlign: 'center',
    width: '95%'
  }
}

const DayHistoryList = ({allDays,handleClick}) => {
  return (
    <ul style={style.list}>
      <h3>Macros History</h3>
      {allDays.map((day,i)=>(
        <li key={i}>
          <a 
            href='' 
            style={style.link}
            onClick={(e)=>{
              e.preventDefault();
              handleClick(day);
            }}
          >
            {new Date(day.createdAt).toLocaleString()}
          </a>
          <div style={style.details}>
            Total Calories: {day.total_calories} |
            Total Carbs: {day.total_carbs} |
            Total Protein: {day.total_protein} | 
            Total Fat: {day.total_fat}
            <div>Food History: -</div>
          </div>
        </li>
      ))}
    </ul>
    )
  }

export default DayHistoryList;