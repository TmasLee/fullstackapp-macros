const DayObj = function(){
  const day = {};
  day.foodHistory = [];
  day.addNewFoodObj = function(newFoodObj){
    this.foodHistory.push(newFoodObj);
  };
  day.getFoodObj = function(){

  };

  return day;
}

export default DayObj;