import React from 'react';
import FoodLinkList from './FoodLinkList';

const FoodSearchBar = ({handleSearchBarChange,query,queryResults,handleFoodLinkClick}) => {
  return (
    <div>
      Enter a food: <input onChange={handleSearchBarChange} value={query}/>
      <FoodLinkList queryResults={queryResults} onLinkClick={handleFoodLinkClick}/>
    </div>
  );
}

export default FoodSearchBar;