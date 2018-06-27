import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from 'Actions/actions';
import Input from './Input';
import HistoryList from './HistoryList';
import DayObj from '../DayFactory';
import ApiDisplay from '../Presentational/ApiDisplay';
import DatabaseDisplay from '../Presentational/DatabaseDisplay';

class App extends Component {
  state = {
    date: new Date()  
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.tick(),1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if ((prevState.date.toLocaleTimeString === '12:00:00 AM')
    ||(!this.props.currentDay)){
      //  Dispatch action to insert new record into DB.
      this.props.dispatch(actions.addNewDay());
      //  Dispatch action to set current day to newDay.
      let newDay = new DayObj();
      this.props.dispatch(actions.createNewDay(newDay));
    }
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    const {date} = this.state;
    return (
      <div>
        <DatabaseDisplay />
        <HistoryList />
        <ApiDisplay />
        <Input currentTime={date.toLocaleTimeString()}/>
      </div>
    )
  }
}

export default connect((state, props)=>{
  return {
    currentDay: state.app.currentDay,
    allDays: state.app.allDays,
    errorMsg: state.errors.errorMsg,
  }
})(App);

/** 
 * - jest test for if correct numbers get rendered
 *  1. Single svg with all displays 
 *  2. Api --> each item in history is link 
 *  3. tooltip explaining what this app does and how to use.
 *  4. Link to the USDA api
 *  5. visuals --> make displays look good, animations
 *  ...
 *  8. Add 'load more' in queryresults
 *  9. Add history of foods for quick add
 *  10. Figure out dotenv to hide credentials
 *  11. sync server and client time
 *  12. App is stateful because it will change view from regular to graph?
*/