import store from '../serverStore';
import * as actions from '../Actions/actions';

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
      store.dispatch(actions.getAllDays(metadata));
    });
  }

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

  days.deleteDayObj = function(){

  }

  return days;

}