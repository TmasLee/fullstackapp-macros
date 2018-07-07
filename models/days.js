module.exports = (sequelize, DataTypes) => {
  var days = sequelize.define('days', {
    total_calories: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    total_protein: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    total_fat: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    },
    total_carbs: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
      allowNull: false
    }
  });

  days.getAllDays = function(){
    return sequelize.query('SELECT * FROM DAYS ORDER BY id DESC').spread((results,metadata)=>{
      return results;
    });
  };

  days.postNewEntry = function(){
    return days.create({
      createdAt: (new Date()).toISOString().substring(0,19).replace('T',' '),
      updatedAt: (new Date()).toISOString().substring(0,19).replace('T',' ')
    });
  };
  
  days.deleteEntry = function(){

  }

  days.getDetails = function(){

  };

  days.addMacros = function(macros, day_id){
    days.update({
      total_calories: sequelize.literal(`total_calories + ${macros[0]}`)
    },
    {where: {id: day_id}});
    days.update({
      total_protein: sequelize.literal(`total_protein + ${macros[1]}`)
    },
    {where: {id: day_id}});
    days.update({
      total_fat: sequelize.literal(`total_fat + ${macros[2]}`)
    },
    {where: {id: day_id}});
    days.update({
      total_carbs: sequelize.literal(`total_carbs + ${macros[3]}`)
    },
    {where: {id: day_id}});

    return sequelize.query('SELECT * FROM DAYS ORDER BY id DESC LIMIT 1').spread((results,metadata)=>{
      return results;
    });
  }

  days.getMostRecent = function(){
    return sequelize.query('SELECT * FROM DAYS ORDER BY id DESC LIMIT 1').spread((results,metadata)=>{
      return results;
    });
  };

  return days;

}