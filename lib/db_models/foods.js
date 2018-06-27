module.exports = (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    name: {
      type: DataTypes.STRING(100),
      defaultValue: 0,
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
    return sequelize.query('SELECT * FROM FOODS',{type:sequelize.QueryTypes.SELECT}).then(resp=>console.log(resp));
  }

  foods.addNewFood = function(){

  };

  foods.getDetails = function(){

  };

  foods.update = function(){

  };

  foods.removeFood = function(){

  };
  
  return foods;

}