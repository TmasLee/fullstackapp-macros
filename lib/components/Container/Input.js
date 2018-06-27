import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from 'Actions/actions';
import FoodSearchBar from '../Presentational/FoodSearchBar';
import MacrosCounter from '../Presentational/MacrosCounter';
import SubmitBtn from '../Presentational/SubmitBtn';
import ServingsDropdown from '../Presentational/ServingsDropdown';
import FoodObj from '../FoodFactory';
import DayObj from '../DayFactory';

/**
 * Forms can be tricky with redux as it can be hard to determine how it
 * would be split into presentational/container components. I opted to 
 * split every part of the form up as the code would be much cleaner.
 */

const styles = {
  errorMsg: {
    color: 'red'
  },
  form: {
    position: 'relative',
    paddingTop: '300px',
    textAlign: 'center'
  }
}

class Input extends Component {
  handleSearchBarChange = (event) => {
    let newQuery = event.target.value;
    this.props.dispatch(actions.changeQuery(newQuery));
    this.props.dispatch(actions.fetchQueryResults(newQuery));
  }

  handleFoodLinkClick = async (id, name) => {
    this.props.dispatch(actions.fetchFoodNutrition(id, name));
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
    this.props.dispatch(actions.storeEntryMacros(macros));
  }

  getServings = (e) => {
    let servings = e.target.value;
    this.props.dispatch(actions.getServings(servings));
    this.calculateTotalMacros(this.props.foodMacros, servings);
  }

  // catch nothing entered error msg for submit button
  handleSubmitBtn = (e) => {
    e.preventDefault();

    let newFoodEntry = new FoodObj(this.props.query, this.props.entryMacros);
    this.props.dispatch(actions.addFoodToDay());
  }

  getAllDays = async(e) =>{
    let work = await fetch(`/days`, {method: 'GET'});
    console.log(work);
    }

  render(){
    const {query,queryResults,entryMacros,errorMsg,currentTime,allDays} = this.props;

    if (errorMsg){
      var error = <div style={styles.errorMsg}>{errorMsg}</div>;
    };
    if (queryResults.length === 0 ){

  } else {

   }

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
    errorMsg: state.errors.errorMsg,
  }
})(Input);