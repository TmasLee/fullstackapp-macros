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

const FoodItemList = ({allFoods, handleQuickAdd, handleDelete}) => {
  return (
    <ul style={style.list}>
      <h3>Foods History</h3>
      {allFoods.map((food,i)=>(
        <li key={i}>
          <a
            href=''
            style={style.link}
            onClick={(e)=>{
              e.preventDefault();
              handleQuickAdd(food);
            }}
          >
            {food.name}
          </a>
          <div style={style.details}>
            Calories: {food.calories} |
            Carbs: {food.carbs} |
            Protein: {food.protein} | 
            Fat: {food.fat} |
            {new Date(food.createdAt).toLocaleString()} 
            <button
              onClick={(e)=>{
                e.preventDefault();
                handleDelete(food.id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
    )
  }

export default FoodItemList;