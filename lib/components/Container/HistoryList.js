import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as appActions from 'Actions/appActions';
import DayHistoryList from '../Presentational/DayHistoryList'

const styles = {
  history:{
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '65%',
    height: '500px',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
}

class HistoryList extends Component {
  state = {
    dayToDisplay: null
  }

  componentDidUpdate(prevProps,prevState){
    if (this.props.currentDay !== null){
      if (prevProps.currentDay !== this.props.currentDay){
        console.log('should update day history')
        this.props.dispatch(appActions.getAllDays());
      }
    }
    if (prevProps.allDays.length !== this.props.allDays.length){
      this.props.dispatch(appActions.getAllDays());
    }
  }

  handleClick = (day) => {
    console.log(day);
    this.setState({
      showDayInfo: day.day_obj
    });
  }

  render(){
    return (
      <div style={styles.history}>
        <DayHistoryList 
          allDays={(this.props.allDays ? (this.props.allDays):([])) }
          handleClick={this.handleClick}
        />
      </div>
      )
    }
  };

export default connect((state,props)=>{
  return{
    allDays: state.app.allDays,
    currentDay: state.app.currentDay
  }
})(HistoryList);