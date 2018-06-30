module.exports = (sequelize, DataTypes) => {
  var days = sequelize.define('days', {
    day_obj: {
      type: DataTypes.STRING(120),
      defaultValue: '-',
      allowNull: false
    },
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
    return sequelize.query('SELECT * FROM DAYS').spread((results,metadata)=>{
      return results;
    });
  };

  days.addNewEntry = function(){
    return days.create({
      createdAt: (new Date()).toISOString().substring(0,19).replace('T',' '),
      updatedAt: (new Date()).toISOString().substring(0,19).replace('T',' ')
    });
  };
  
  days.deleteEntry = function(){

  }

  days.getDetails = function(){

  };

  days.addDayObj = function(){

  };

  days.getMostRecent = function(){
    return sequelize.query('SELECT * FROM DAYS ORDER BY createdAt DESC LIMIT 1').spread((results,metadata)=>{
      return results;
    });
  };

  return days;

}