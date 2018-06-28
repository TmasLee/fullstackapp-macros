import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from 'Actions/actions';
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
    
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if ((prevProps.date.toLocaleTimeString === '12:00:00 AM')
    ||(!this.props.currentDay)){
      //  Dispatch action to insert new record into DB.
      this.props.dispatch(actions.addNewDay());
      //  Dispatch action to set current day to newDay.
      let newDay = new DayObj();
      this.props.dispatch(actions.createNewDay(newDay));
    }
  }

  tick(){
    this.props.dispatch(actions.getDateTime());
  }

  render(){
    const {date} = this.props;
    
    // Serverside component is rendered to a string first, so we have to
    // pass the first date (initially rendered on the server as a string)
    // into the Date() function to get proper date object
    let dateObj = new Date(date);
    let currentTime = dateObj.getHours()+ ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();

    // console.log(currentTime);

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
 *  1. Api --> each item in history is link + Add history of foods for quick add
 *  2. visuals/single svg with all displays --> make displays look good, animations
 *  3. tooltip explaining what this app does and how to use + Link to the USDA api
 *  4. Figure out dotenv to hide credentials
 * 
 *  Add Later:
 *  - 'load more' in queryresults  
 *  - App is stateful -> will change view from regular to graph
*/