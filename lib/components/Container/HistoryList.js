import React, {Component} from 'react';
import {connect} from 'react-redux';

// import * as actions from 'Actions/actions';
import DayHistoryList from '../Presentational/DayHistoryList'
const style = {
  position: 'absolute',
  left: 0
}

class HistoryList extends Component {
  handleClick = (day) => {
    console.log(day);
    return(
      <div>{...day}</div>
    )
  }

  render(){
    return (
      <div style={style}>
        <DayHistoryList 
          allDays={this.props.allDays}
          handleClick={this.handleClick}
        />
      </div>
      )
    }
  };

export default connect((state,props)=>{
  return{
    allDays: state.app.allDays,
    allFoods: state.app.allFoods
  }
})(HistoryList);