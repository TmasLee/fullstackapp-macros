import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as appActions from 'Actions/appActions';
import FoodItemList from '../Presentational/FoodItemList';

const styles = {
  list:{
    position: 'absolute',
    width: '65%',
    height: '520px',
    bottom: '30px',
    left: '20%',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
}

class FoodList extends Component {

  componentDidUpdate(prevProps,prevState){
    if (prevProps.allFoods.length !== this.props.allFoods.length){
      console.log('should update all foods');
      this.props.dispatch(appActions.getAllFoods());
    }
  }

  handleQuickAdd = (food) => {
    let macros = [food.calories, food.protein, food.fat, food.carbs];
    this.props.dispatch(appActions.addMacrosToCurrent(macros,this.props.currentDay[0].id));
  }

  handleDelete = (food) => {

  }

  render(){
    return(
      <div style={styles.list}>
        <FoodItemList
          allFoods={(this.props.allFoods ? (this.props.allFoods):([]))}
          handleQuickAdd={this.handleQuickAdd}/>
      </div>
    )
  }
}

export default connect((state,props)=>{
  return {
    allFoods: state.app.allFoods
  }
})(FoodList);