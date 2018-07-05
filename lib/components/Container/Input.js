import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as inputformActions from 'Actions/inputformActions';
import * as appActions from 'Actions/appActions';
import FoodSearchBar from '../Presentational/FoodSearchBar';
import MacrosCounter from '../Presentational/MacrosCounter';
import SubmitBtn from '../Presentational/SubmitBtn';
import ServingsDropdown from '../Presentational/ServingsDropdown';
import FoodObj from '../FoodFactory';

/**
 * Forms can be tricky with redux. It can be hard to determine how it would be split into 
 * presentational/container components. Here I chose to split every part of the form up for cleaner code.
 */

const styles = {
  errorMsg: {
    color: 'red'
  },
  form: {
    position: 'relative',
    display: 'inline-block',
    top: '570px',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)' 
  }
}

class Input extends Component {
  handleSearchBarChange = (event) => {
    let newQuery = event.target.value;
    this.props.dispatch(inputformActions.changeQuery(newQuery));
    this.props.dispatch(inputformActions.fetchQueryResults(newQuery));
  }

  handleFoodLinkClick = async (id, name) => {
    this.props.dispatch(inputformActions.fetchFoodNutrition(id, name));
  }

  calculateTotalMacros = (macros, servings) => {
    let entryMacros = macros.map((nutrient)=>{
      let value = parseInt(nutrient) * servings;
      if (isNaN(value)){
        return 0;
      }
      return value;
    });
    this.storeMacros(entryMacros);
  }

  storeMacros = (macros) => {
    this.props.dispatch(inputformActions.storeEntryMacros(macros));
  }

  getServings = (e) => {
    let servings = e.target.value;
    this.props.dispatch(inputformActions.getServings(servings));
    this.calculateTotalMacros(this.props.foodMacros, servings);
  }

  // catch nothing entered error msg for submit button
  handleSubmitBtn = (e) => {
    e.preventDefault();

    let newFoodEntry = new FoodObj(this.props.query, this.props.entryMacros);
    let macros = this.props.entryMacros;
    
    this.props.dispatch(appActions.addMacrosToCurrent(macros, this.props.currentDay[0].id));
    this.props.dispatch(appActions.getMostRecentDay());
    this.props.dispatch(appActions.postFood(newFoodEntry));
  }

  render(){
    const {query,queryResults,entryMacros,errorMsg,currentTime} = this.props;

    if (errorMsg){
      var error = <div style={styles.errorMsg}>{errorMsg}</div>;
    };

    return (
      <div>
        <div style={styles.form}>
          {error}
          {currentTime}
          <FoodSearchBar 
            handleSearchBarChange={this.handleSearchBarChange}
            query={query}
            queryResults={queryResults}
            handleFoodLinkClick={this.handleFoodLinkClick}
          />
          <ServingsDropdown getServings={this.getServings}/>
          <MacrosCounter entryMacros={entryMacros}/>
          <SubmitBtn handleSubmitBtn={this.handleSubmitBtn}/>
        </div>
      </div>
      )
    }
  };

export default connect((state,props)=>{
  return {
    query: state.inputForm.query,
    queryResults: state.inputForm.queryResults,
    foodMacros: state.inputForm.foodMacros,
    entryMacros: state.inputForm.entryMacros,
    allDays: state.app.allDays,
    allFoods: state.app.allFoods,
    currentDay: state.app.currentDay,
    errorMsg: state.errors.errorMsg,
  }
})(Input);