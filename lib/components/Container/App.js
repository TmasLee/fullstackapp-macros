import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as appActions from 'Actions/appActions';
import Input from './Input';
import HistoryList from './HistoryList';
import FoodList from './FoodList';
import DayObj from '../DayFactory';
import HelpTooltip from '../HelpTooltip';

class App extends Component {
  componentDidMount(){
    this.timer = setInterval(
      () => this.tick(),1000
    );
  }

  componentWillMount(){
    this.props.dispatch(appActions.getAllDays());
    this.props.dispatch(appActions.getAllFoods());
    if(!this.props.currentDay){
      this.props.dispatch(appActions.getMostRecentDay());
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps,prevState){
    this.dateObj = new Date(prevProps.date);
    this.currentTime = this.dateObj.getHours()+ ':' + this.dateObj.getMinutes() + ':' + this.dateObj.getSeconds();
    if ((this.currentTime === '0:0:0')
    ||(!this.props.currentDay)){
      this.props.dispatch(appActions.postNewDay());
      let newDay = new DayObj();
      this.props.dispatch(appActions.createNewDay(newDay));
      this.props.dispatch(appActions.getAllDays());
      this.props.dispatch(appActions.getMostRecentDay());
    }
  }

  tick(){
    this.props.dispatch(appActions.getDateTime());
  }

  render(){
    return (
      <div>
        <HistoryList/>
        <HelpTooltip/>
        <FoodList/>
        <Input currentTime={this.currentTime}/>
      </div>
    )
  }
}

export default connect((state, props)=>{
  return {
    date: state.app.date,
    currentDay: state.app.currentDay,
    allDays: state.app.allDays,
    allFoods: state.app.allFoods,
    errorMsg: state.errors.errorMsg,
  }
})(App);