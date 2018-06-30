import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as appActions from 'Actions/appActions';
import Input from './Input';
import HistoryList from './HistoryList';
import DayObj from '../DayFactory';
import ApiDisplay from '../Presentational/ApiDisplay';
import DatabaseDisplay from '../Presentational/DatabaseDisplay';

class App extends Component {
  componentDidMount(){
    this.timer = setInterval(
      () => this.tick(),1000
    );
  }

  componentWillMount(){
    if(!this.props.currentDay){
      this.props.dispatch(appActions.getMostRecentDay());
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if ((prevProps.date.toLocaleTimeString === '00:00:00 AM')
    ||(!this.props.currentDay)){
      this.props.dispatch(appActions.addNewDay());
      
      let newDay = new DayObj();
      this.props.dispatch(appActions.createNewDay(newDay));
    }
    if (prevProps.allDays !== this.props.allDays){
      this.props.dispatch(appActions.getAllDays());
    }
  }

  tick(){
    this.props.dispatch(appActions.getDateTime());
  }

  render(){
    const {date} = this.props;
    // Serverside is rendered as a string first, so we have to pass the first
    // date into the Date() function to get proper date object
    let dateObj = new Date(date);
    let currentTime = dateObj.getHours()+ ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();

    return (
      <div>
        <DatabaseDisplay />
        <HistoryList />
        <ApiDisplay />
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
    errorMsg: state.errors.errorMsg,
  }
})(App);

/** 
 * - jest test for if correct numbers get rendered
 *  1. history of days and foods for quick add
 *  2. visuals/single svg with all displays --> make displays, animations
 *  3. tooltip explaining what this app does and how to use + Link to the USDA api + explain concepts-->SSR just for initial render and to connect with db
 * 
 *  Add Later:
 *  - Figure out dotenv to hide credentials
 *  - App is stateful -> will change view from regular to graph
*/