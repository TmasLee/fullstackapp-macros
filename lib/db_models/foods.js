module.exports = (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    name: {
      type: DataTypes.STRING(100),
      defaultValue: 'Food',
      allowNull: true
    },
    calories: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    protein: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    fat: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    carbs: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    }
  });

  foods.getAllFoods = function(){
    return sequelize.query('SELECT * FROM FOODS').spread((results,metadata)=>{
      return results;
    })
  };

  foods.postFood = function(food){
    console.log(food);
    return foods.create({
      name: food.name,
      calories: food.macros[0],
      protein: food.macros[1],
      fat: food.macros[2],
      carbs: food.macros[3],
    });
  };

  foods.getDetails = function(){

  };

  foods.update = function(){

  };

  foods.removeFood = function(){

  };
  
  return foods;

}