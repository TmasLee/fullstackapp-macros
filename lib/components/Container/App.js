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
    if ((prevProps.date.toLocaleTimeString === '00:00:00 AM')
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
    const {date} = this.props;
    let dateObj = new Date(date);
    let currentTime = dateObj.getHours()+ ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();

    return (
      <div>
        <HistoryList/>
        <HelpTooltip/>
        <FoodList/>
        <Input currentTime={currentTime}/>
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